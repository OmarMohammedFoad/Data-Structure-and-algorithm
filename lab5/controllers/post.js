import Post from "../model/post.js";
import User from "../model/user.js"


const createPost = async (req, res) => {
    const data = req.body;
    const user = req.user;
    try {

        const newPost = new Post({

            user: user.userId,
            content: data.content,
            title: data.title

        });

        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updatePost = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {

        const updatePost = await Post.findByIdAndUpdate(id, data, { new: true });
        res.status(201).send(updatePost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        const updatePost = await Post.findByIdAndDelete(id);
        res.status(200).send(updatePost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;
        
        if (id) {
            const post = await Post.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            // return res.render('pages/', { post });
        }

        const posts = await Post.find({ user: user.userId }).populate('user', 'userName');

        const currentUser = await User.findById(user.userId);
        console.log(currentUser);
        
        res.render('pages/index', { posts:posts, currentUser: currentUser });
        // return res.render('pages/index', { posts},{currentUser});


    } catch (error) {
        console.error("Error fetching post(s):", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



export {
    createPost,
    getPost,
    updatePost,
    deletePost
}


