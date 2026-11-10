import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters.")
    .regex(/^[A-Za-z ]+$/, "Full name can contain only letters and spaces."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),

  college: z.string().trim().min(1, "Please select your college."),
  course: z.string().trim().min(1, "Please select your course."),
  branch: z.string().trim().min(1, "Please select your branch."),
  year: z.string().trim().min(1, "Please select your year of study."),
  domain: z.string().trim().min(1, "Please select a domain."),

  projectName: z
    .string()
    .trim()
    .min(5, "Project name must be at least 5 characters."),

  pptLink: z.string().trim().url("Enter a valid PPT shareable link."),

  prototypeLink: z
    .string()
    .trim()
    .url("Enter a valid prototype link."),

  demoVideoLink: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  teamSize: z
    .number()
    .int()
    .min(1)
    .max(5),

  teamMembers: z.array(
    z.object({
      name: z.string().trim().min(1, "Member name is required."),
      email: z.string().trim().email("Enter a valid member email."),
    })
  ),
});