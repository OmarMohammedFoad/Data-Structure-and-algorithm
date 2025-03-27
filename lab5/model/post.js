
import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:'Users',required:true},
    content:{type:String,required:true},
    likes:[{type:mongoose.Types.ObjectId,ref:'Users'}],
    comment:[{
        user:{type:mongoose.Types.ObjectId,ref:'Users',required:true},
        text:{type:String,required:true},
        createdAt:{type:Date,default:Date.now}
    }],
    title:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},

},

{timestamps:true}
);

export default mongoose.model('Posts',postSchema);