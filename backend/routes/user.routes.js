import express from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Get currently logged-in user's profile
router.get("/me", protect, getCurrentUser);

export default router;