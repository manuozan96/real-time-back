import mongoose from "mongoose";

export class Database {
  static async connect(uri: string) {
    try {
      await mongoose.connect(uri);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("MongoDB disconnected successfully");
    } catch (error) {
      console.error("MongoDB disconnection error:", error);
    }
  }
}
