import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connected to tradeMe")

        process.on("exit", async () => {
            if(mongoose.connection.readyState === 1) {
                await closeDb()
                console.log("tradeMe connection closed")
            }
        })
    } catch (err) {
        console.error("Connection error:", err.message);
        process.exit(1)
    
    }
}

const closeDb = async () => {
    await mongoose.connection.close()
} 

export { connectDb, closeDb }