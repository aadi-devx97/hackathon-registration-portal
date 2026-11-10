import HackathonRegistration from "../models/HackathonRegistration.js";
import { sendRegistrationEmail } from "../services/email.service.js";
import User from "../models/User.js";

export const registerForHackathon = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found.",
    });
    }

    // Check whether the user has already registered
    const existingRegistration = await HackathonRegistration.findOne({
      user: userId,
    });

    if (existingRegistration) {
      return res.status(409).json({
        success: false,
        message: "You have already registered for this hackathon.",
      });
    }

    // Use authenticated account details, not frontend-supplied identity
    const registrationData = {
      ...req.body,
      user: userId,
      fullName: user.fullName,
      email: user.email,
    };

    const registration = await HackathonRegistration.create(
      registrationData
    );

    // Send confirmation email
    try {
      await sendRegistrationEmail(registration);
    } catch (emailError) {
      console.error("Registration email failed:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Hackathon registration successful.",
      registration,
    });
  } catch (error) {
    console.error("Hackathon registration error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during registration.",
    });
  }
};

export const getMyEntry = async (req, res) => {
  try {
    const userId = req.user.userId;

    const registration = await HackathonRegistration.findOne({
      user: userId,
    });

    if (!registration) {
      return res.status(404).json({
        success: false,
        registered: false,
        message: "You haven't registered for the hackathon yet.",
      });
    }

    return res.status(200).json({
      success: true,
      registered: true,
      registration,
    });
  } catch (error) {
    console.error("Get hackathon entry error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching your registration.",
    });
  }
};