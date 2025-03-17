const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

app.use(bodyParser.json());

app.use(logs);



function logs(req,res,next) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    
    next();
};

app.get("/about",(req,res)=>{

    res.send("<h1>about</h1>")
});


app.get("/contact",(req,res)=>{

    res.send("<h1>contact</h1>")
});


app.get("/home",(req,res)=>{

    res.send("<h1>home</h1>")
});









app.listen(port,()=>{

    console.log(`this server is running on port ${port}`);
    
})