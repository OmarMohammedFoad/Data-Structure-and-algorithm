import express from "express";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { connectToDatabase } from "./config/database.js";
import { postRoutes } from "../lab5/routes/post.js";
import { authRouters } from "./routes/auth.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./view");

const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins (change for production)
    },
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {    
        io.emit("chat message", msg); 
        console.log('message: ' + msg);

    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});



app.use("/post", postRoutes);
app.use("/auth", authRouters);

// Start the application
const runApplication = async () => {
    try {
        await connectToDatabase();
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("Failed to connect to the server", error);
        process.exit(1);
    }
};

runApplication();
