import express from "express";
import { validate } from "../middleware/validate.js";

import {
  signup,
  verifyEmailOtp,
  login,
  resendOtp,
} from "../controllers/auth.controller.js";

import {
  signupSchema,
  verifyOtpSchema,
  loginSchema,
  resendOtpSchema,
} from "../validators/auth.validator.js";
import otpLimiter from "../middleware/otpLimiter.js";
import resendOtpLimiter from "../middleware/resendOtpLimiter.js";
import loginLimiter from "../middleware/loginLimiter.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);

router.post(
  "/verify-otp",
  otpLimiter,
  validate(verifyOtpSchema),
  verifyEmailOtp
);

router.post(
  "/login",
  loginLimiter,
  validate(loginSchema),
  login
);

router.post(
  "/resend-otp",
  resendOtpLimiter,
  validate(resendOtpSchema),
  resendOtp
);

export default router;