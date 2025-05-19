
import mongoose from "mongoose";
import {DB_NAME} from "../../constant.js";

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://ankitofficial0271:eQ8jvhrCeWz4PK06@cluster0.ivrqviy.mongodb.net/${DB_NAME}`);
        console.log('mongodb connected successfully')
    }catch (e){
        throw new Error("Error  in  connecting")
    }
}

export {
    connectDB,
}