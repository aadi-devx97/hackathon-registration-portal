import { sendContactEmail } from "../services/email.service.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await sendContactEmail({ name, email, message });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
};