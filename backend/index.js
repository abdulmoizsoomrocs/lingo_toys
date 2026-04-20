import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ VERY IMPORTANT LINE
app.use("/api/products", productRoutes);
app.use("/api/newsletter", newsletterRoutes);
console.log("Routes loaded");
// test route (add this)
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});