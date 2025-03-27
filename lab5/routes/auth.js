import express from "express"
import {logout, signIn,signUp} from "../controllers/auth.js";

const authRouters = express.Router();



authRouters.post("/signup",signUp);
authRouters.post("/signin",signIn);
authRouters.post("/logout",logout);

authRouters.get('/signin',(req,res)=>{
    res.render('pages/login',{error:null});
}
);

authRouters.get('/signup',(req,res)=>{
    res.render('pages/register',{error:null});
}
);

export{
    authRouters
}