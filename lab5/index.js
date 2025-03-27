import express from "express"
const app = express();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/database.js";
import { postRoutes } from "../lab5/routes/post.js"
import { authRouters } from "./routes/auth.js";
const port = 3000;


app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./view");










app.use("/post", postRoutes);

app.use("/auth", authRouters);















const runApplication = async () => {

    try {
        await connectToDatabase()
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);

        });
    } catch (error) {
        console.log("failed to connect to the server", error);
        process.exit(1);

    }
}


runApplication();