
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb =async () => {
    try{

        const uri=process.env.Connection_String;

        if (!uri){
            throw new Error("Connection string is not defined in the environment variables.");
        }
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");

    }catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
}