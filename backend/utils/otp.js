import { randomInt } from "node:crypto";
import bcrypt from "bcrypt";

// otp generate karega
export const generateOtp = () => {
  return randomInt(100000, 1000000).toString();
};

// Hash karega ye
export const hashOtp = async (otp) => {
  return bcrypt.hash(otp, 10);
};

// Compare a submitted OTP with its stored hash
export const verifyOtp = async (otp, hashedOtp) => {
  return bcrypt.compare(otp, hashedOtp);
};