import mongoose from "mongoose";



const messageSchema = new mongoose.Schema({
    content:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    createdAt:{type:Date,default:Date.now}
},
    {
        timestamps:true
    }

);

export default mongoose.model("Message",messageSchema);

