const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./db/connect');
const bodyParse = require('body-parser');

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const PORT = 8080;
const app = express();



app.use(express.static("public"));

app.use(cookieParser());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded());



const sessions = {};

function auth(roles) {

    return function (req, res, next) {
        try {
            const cookiesSsid = req.cookies;

            if (cookiesSsid.sid && sessions[cookiesSsid.sid]) {
                const user = sessions[cookiesSsid.sid];
                console.log(user,"asdsad");
            
                if (user.roles.includes(roles)) {
                    return next();
                } else {
                    return res.status(401).send("unauthorized");

                }
            } else {
                return res.status(401).send("unauthorized");
            }
        } catch (error) {
            console.log(error);
            
            return res.status(500).send("something went wrong");
        }
    }
}

app.post('/user/register', async (req, res) => {
    try {
        const { email, password,role } = req.body;
        
        const emailUser = await app.db.collection("users").findOne({ email });
        if (emailUser) {
            return res.status(401).send("this user is already registerd");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = app.db.collection("users").insertOne    ({
                email: email,
                password: hash,
                role:[role],
                createdAt: new Date().toISOString()
            });
            return res.status(200).send({ message: "user created ", newUser });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(" something went wrong");
    }

});



app.post("/user/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password);
        
        const user = await app.db.collection("users").findOne({ email });
        if (!user) {
            return res.status(401).json("password or email is wrong");
        }
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (isCorrect) {
            const sessionId = uuid.v4();
            sessions[sessionId] = { email: user.email, roles: user.role };
            res.cookie("sid", sessionId, { httpOnly: true, secure: false });
            return res.status(200).send("Login successful");
        } else {
            return res.status(401).send("Password or email is wrong");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Something went wrong");
    }
});




app.get("/home",auth("user"),(req,res)=>{
    try {
        console.log();
        
        res.send({ message: `welcome, ${sessions[req.cookies.sid].email}!` });

    } catch (error) {
    console.log(error);
    }
});
app.get("/dashboard",auth("admin"),(req,res)=>{
    
    res.send({ message: `welcome, ${sessions[req.cookies.sid].email}!` });
});



async function runApp() {
    const database = await db.run();
    app.db = database;
    app.listen(PORT, async () => {
        console.log(`server is running on ${PORT}`);

    })
}


runApp();