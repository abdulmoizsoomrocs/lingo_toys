import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// 404 handler - serve index.html for unmatched routes (SPA fallback)
app.use((req, res) => {
  // For API 404s, return JSON error
  if (req.path.startsWith("/api")) {
    res.status(404).json({ message: "API route not found" });
  } else {
    // For frontend routes, serve index.html
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});