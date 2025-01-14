import { env } from "./config/env.js";
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT || 3000, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error.message);
  }
};

startServer();
