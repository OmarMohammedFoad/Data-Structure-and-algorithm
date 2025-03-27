import mongoose from "mongoose";


const url = "mongodb://localhost:27017/Blogs";


export const connectToDatabase = async ()=>{
    try {
        
        await mongoose.connect(url);
        console.log("the database is connected!");
        
    } catch (error) {
        console.log(error);
        
    }
};



