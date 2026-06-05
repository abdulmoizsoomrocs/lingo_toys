import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);

async function addDummyUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Hash password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create dummy user
    const dummyUser = {
      name: "Demo User",
      email: "demo@example.com",
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email: "demo@example.com" });
    if (existingUser) {
      console.log("⚠️  User demo@example.com already exists");
      console.log("User details:", {
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      });
    } else {
      // Insert user
      await User.create(dummyUser);
      console.log("✅ Dummy user created successfully!");
      console.log("📧 Email: demo@example.com");
      console.log("🔐 Password: 123456");
    }

    // Show all users
    const allUsers = await User.find();
    console.log("\n📊 All registered users:");
    allUsers.forEach((user) => {
      console.log(`  - ${user.name} (${user.email})`);
    });

    await mongoose.disconnect();
    console.log("\n✅ Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

addDummyUser();
