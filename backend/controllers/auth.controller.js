import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateOtp, hashOtp } from "../utils/otp.js";
import { sendOtpEmail } from "../services/email.service.js";
import { verifyOtp } from "../utils/otp.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check whether the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate and hash the OTP
    const otp = generateOtp();
    const otpHash = await hashOtp(otp);

    // Create the user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      otpHash,
      otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
      isVerified: false,
    });

    // Send the OTP to the user's email
    try {
      await sendOtpEmail(email, otp);
    } catch (emailError) {
      console.error("OTP email delivery failed:", emailError.message);

      return res.status(503).json({
        success: false,
        message: "Account created, but verification email could not be sent. Please try resending the OTP.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Account created. Please verify your email using the OTP sent to you.",
      email: user.email,
    });

  } catch (error) {
    console.error("Signup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during signup.",
    });
  }
};

export const verifyEmailOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user and explicitly retrieve hidden OTP fields
    const user = await User.findOne({ email }).select(
      "+otpHash +otpExpiresAt"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Account not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email is already verified.",
      });
    }

    if (!user.otpHash || !user.otpExpiresAt || user.otpExpiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    }

    // Compare submitted OTP with the stored hash
    const isOtpValid = await verifyOtp(otp, user.otpHash);

    if (!isOtpValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    // Activate account and invalidate OTP
    user.isVerified = true;
    user.otpHash = undefined;
    user.otpExpiresAt = undefined;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully. You can now log in.",
    });

  } catch (error) {
    console.error("OTP verification error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during OTP verification.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and explicitly include the hidden password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Check whether email is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login.",
    });
  }
};

export const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Account not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "This email is already verified.",
      });
    }

    // Generate a fresh OTP
    const otp = generateOtp();

    // Hash the OTP before storing it
    user.otpHash = await hashOtp(otp);

    // Set a new 10-minute expiry
    user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    try {
      await sendOtpEmail(email, otp);
    } catch (emailError) {
      console.error("Resend OTP email failed:", emailError.message);

      return res.status(503).json({
        success: false,
        message: "Unable to send a new verification email. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "A new verification code has been sent to your email.",
    });
  } catch (error) {
    console.error("Resend OTP error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while resending the OTP.",
    });
  }
};