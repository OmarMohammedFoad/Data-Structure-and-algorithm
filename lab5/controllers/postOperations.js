import User from "../model/user.js";
import Post from "../model/post.js";

const addLikeToPost = async (req, res) => {
    const idPost = req.params.id;
    const userLogged = req.user.userId;
    try {

        const post = await Post.findById(idPost);
        


    } catch (error) {

    }
}



/***
 * someone want to add like to a post 
 * so you should have
 * 
 * 
 * 
 */