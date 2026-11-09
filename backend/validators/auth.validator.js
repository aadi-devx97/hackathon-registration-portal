import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters")
      .regex(
        /^[A-Za-z ]+$/,
        "Full name can contain only letters and spaces."
      ),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export const verifyOtpSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),

  otp: z
    .string()
    .regex(/^\d{6}$/, "OTP must contain exactly 6 digits."),
});