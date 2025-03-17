const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));




/**
 * 
 *  publicMiddleWare(req,res,next){
 *      
 *      req.url = ''
 * 
 *  if the req.url matches the content in the directory you pass 
 *  it will serve the static files
 * else
 *  it will invoke the next() function to move to another middleware
 * 
 * 
 *           
 * 
 * 
 * }
 * 
 * 
*/


app.get('/users', (req, res) => {

    const obj = [{

        name: "omar",
        age: 25
    },


    {
        name: "abdo",
        age: 20
    }
    ]


    res.status(200).json(obj);
});

function logs(req, res, next) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

};









app.listen(port, () => {

    console.log(`this server is running on port ${port}`);

})