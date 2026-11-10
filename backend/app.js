import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import hackathonRoutes from "./routes/hackathon.routes.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/hackathon", hackathonRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend API is running",
  });
});

export default app;