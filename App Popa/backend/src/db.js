import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
    try {
        const db = await mongoose.connect(MONGODB_URI, {
            //must add in order to not get any error masseges:
            useUnifiedTopology: true,
            useNewUrlParser: true,

        });
        console.log(`Connected to database successfully`);

    } catch (error) {
        console.log(error);
    }
}