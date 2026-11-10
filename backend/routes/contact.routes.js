import express from "express";

import { submitContactForm } from "../controllers/contact.controller.js";
import protect from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.js";
import { contactSchema } from "../validators/contact.validator.js";

const router = express.Router();

router.post(
  "/",
  protect,
  validate(contactSchema),
  submitContactForm
);

export default router;