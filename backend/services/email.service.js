import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: email,
    subject: "Your Email Verification Code",

    text: `Hello,

    Your verification code is: ${otp}

    This code expires in 10 minutes.

    If you did not request this code, please ignore this email.`,
  };

  return transporter.sendMail(mailOptions);
};

export const sendRegistrationEmail = async (registration) => {
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: registration.email,
    subject: "Hackathon Registration Confirmation",

    text: `Hello,

    Your hackathon registration has been successfully submitted.

    Registration Details:

    Project Name: ${registration.projectName}
    Domain: ${registration.domain}
    Team Size: ${registration.teamSize}

    Your registration details have been saved successfully.

    Thank you for participating!

    MatruCare AI`,
  };

  return transporter.sendMail(mailOptions);
};