import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function checkUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB\n");

    const db = mongoose.connection.db;
    const users = await db.collection("users").find({}).toArray();

    console.log("📊 Users in MongoDB:\n");
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Role: ${user.role}`);
      console.log(`   Created: ${user.createdAt}`);
      console.log();
    });

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkUsers();
