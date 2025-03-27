import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.js"
import Post from "../model/post.js";


const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        console.log("body", req.body);

        if (!userName || !email || !password) {
            return res.status(404).json({ error: "All fields are required" });
        }

        const user = await User.findOne({ email: email });

        if (user) {
            console.log(user);

            return res.status(404).json({ error: "email already exits" });
        } else {

            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            console.log(hashPassword);



            const newUser = new User({
                email: email,
                password: hashPassword,
                userName: userName
            });
            await newUser.save();
            res.status(200).json({ success: "User created successfully" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}


const logout = async (req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({message:"logout successful"});
    } catch (error) {
        console.log(error);
           
    }
}





const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({ email: email });

        if (!user) return res.status(404).json({ error: "invalid email or password" });
        const isCorrectPassword = bcrypt.compareSync(password, user.password);
        if (!isCorrectPassword) return res.status(404).json({ error: "invalid email or password" });

        // console.log(process.env.JWT_SECRET,"toke");
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        


        return res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: "Something went wrong" });
    }
}

export {
    signIn,
    signUp,
    logout
}