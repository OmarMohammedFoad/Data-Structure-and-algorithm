const express = require('express');
const bodyParser = require('body-parser');
const eventEmitter = require('events')
const port = 8080;
const app = express();

app.use(bodyParser.json());



const emitter = new eventEmitter();

emitter.on('connection',(req)=>{
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
});

app.get('/users', (req, res) => {
    console.log("before event");
    emitter.emit("connection",req)
    console.log("after event");
    res.send([{name:"ahmed",age:30},{name:"ali",age:50}]);
});









app.listen(port, () => {

    console.log(`this server is running on port ${port}`);

})