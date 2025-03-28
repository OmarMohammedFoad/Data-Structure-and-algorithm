import express from "express"
import {createPost,deletePost,getPost,updatePost} from "../controllers/post.js";
import { authenticate } from "../middleware/auth.middleware.js";
import User from "../model/user.js"

const postRoutes = express.Router();



postRoutes.get('/posts',authenticate,getPost);

postRoutes.get('/createPage',authenticate,(req,res)=>{
    res.render('pages/createPost');
});
postRoutes.post("/create",authenticate,createPost);
postRoutes.delete("/delete",authenticate,deletePost);
postRoutes.put("/update",authenticate,updatePost);
postRoutes.get("/chat",authenticate ,async(req, res) => {
    const user = req.user
    console.log(user);
    const currentUser = await User.findById(user.userId);
    
    res.render("pages/chatPage",{user:currentUser});
});
export{
    postRoutes
}