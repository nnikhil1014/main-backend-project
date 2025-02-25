import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected: ${connectionInstance.connection.host} \n`);
        
    } catch (error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;