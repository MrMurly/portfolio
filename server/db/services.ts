// External Dependencies
import  mongoose from "mongoose";
import "./models/project";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { projects?: mongoose.Collection } = {}

// Initialize Connection

export async function connectToDatabase (callback?: Function) {
    dotenv.config();
 
    await mongoose.connect(process.env.DB_CONN_STRING!);

    if (callback) {
        callback();
    }
}