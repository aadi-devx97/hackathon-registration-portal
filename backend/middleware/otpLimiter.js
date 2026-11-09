import { rateLimit } from "express-rate-limit";

const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // (10 minutes)
  limit: 5, 
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many OTP attempts. Please try again after 10 minutes.",
  },
});

export default otpLimiter;