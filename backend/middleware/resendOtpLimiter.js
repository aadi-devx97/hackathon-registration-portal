import { rateLimit } from "express-rate-limit";

const resendOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 3, // Maximum 3 requests
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many OTP requests. Please try again after 15 minutes.",
  },
});

export default resendOtpLimiter;