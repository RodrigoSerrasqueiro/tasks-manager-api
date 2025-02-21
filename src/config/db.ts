import mongoose from 'mongoose';
import { env } from './env.js';

const connectDB = async () => {
  const { HOST_USERNAME, HOST_PASSWORD, HOST_CLUSTER, HOST_DATABASE } = env;

  const URI = `mongodb+srv://${HOST_USERNAME}:${HOST_PASSWORD}@${HOST_CLUSTER}/${HOST_DATABASE}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URI);
    console.log('📦 Connect to the MongoDB');
  } catch (error: any) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
