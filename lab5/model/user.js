import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        validator:[validator.isAlphanumeric,"please the user name must be alphanumrice"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validator:[validator.isEmail,"please provide valid email"]
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"please must be at least 8 characters long"],
        maxlength:[128,"please must be at most 128 characters long"],
    },
    post:[{type:mongoose.Types.ObjectId,ref:'Posts'}],


});

export default mongoose.model('Users',userSchema);