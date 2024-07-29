import mongoose from "mongoose";

const mongoDBUri = process.env.DB_URL;
const dbName = process.env.DB_NAME;

export default async function connectToMongoDB(){
    const connectionState = mongoose.connection.readyState;
    
    if (connectionState === 1) {
        console.log("Already Connected To MongoDB");
        return;
    }
    if (connectionState === 2) {
        console.log("Connecting.....");
        return;
    }
    try {
        await mongoose.connect(mongoDBUri, { dbName });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Connection Failed > ', error);
        throw new Error('MongoDB Connection Failed');
    }
}