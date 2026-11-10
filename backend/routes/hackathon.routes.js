import express from "express";

import {
  registerForHackathon,
  getMyEntry,
} from "../controllers/hackathon.controller.js";

import protect from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.js";
import { registrationSchema } from "../validators/registration.validator.js";

const router = express.Router();

// Submit hackathon registration
router.post(
  "/register",
  protect,
  validate(registrationSchema),
  registerForHackathon
);

// Get current user's registration
router.get(
  "/my-entry",
  protect,
  getMyEntry
);

export default router;