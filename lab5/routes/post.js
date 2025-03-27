import express from "express"
import {createPost,deletePost,getPost,updatePost} from "../controllers/post.js";
import { authenticate } from "../middleware/auth.middleware.js";

const postRoutes = express.Router();



postRoutes.get('/posts',authenticate,getPost);

postRoutes.get('/createPage',authenticate,(req,res)=>{
    res.render('pages/createPost');
});
postRoutes.post("/create",authenticate,createPost);
postRoutes.delete("/delete",authenticate,deletePost);
postRoutes.put("/update",authenticate,updatePost);

export{
    postRoutes
}