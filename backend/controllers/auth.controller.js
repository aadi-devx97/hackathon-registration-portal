import bcrypt from "bcrypt";

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
      await sendOtpEmail(email, otp, fullName);
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