import mongoose from "mongoose";

export const connectDB = async () => {
  try {
   const connectionString = "mongodb+srv://fee-store:hxgtHtJGyG55rBtf@cluster0.wvydf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(connectionString);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("This is the problem "+error);
    console.log("MongoDB connection failed");
  }
}