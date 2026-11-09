import express from "express";
import { signup, verifyEmailOtp } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.js";
import { signupSchema, verifyOtpSchema, } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);

router.post(
  "/verify-otp",
  validate(verifyOtpSchema),
  verifyEmailOtp
);

export default router;