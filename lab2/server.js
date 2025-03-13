const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

let cars = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.get("/cars", (req, res) => {
    res.send(cars)
});


app.post("/cars", (req, res) => {
    const body = req.body;
    cars.push(body);
    res.status(200).send({ message: "the data is sent" });
})

app.delete('/cars', (req, res) => {
    const id = req.query.id;
    console.log(id);
    
    const index = cars.findIndex((car) => car.id == id);
    
    if (index != -1) {
        cars.splice(index, 1);
        res.status(201).send({ msg: "car deleted" });

    } else {
        res.status(404).send({ msg: "no car found" });
    }
});



app.put('/cars', (req, res) => {
    const id = req.query.id;
    console.log(id);
    console.log(req.body);
    
    const index = cars.findIndex((car) => car.id == id);

    if (index != -1) {
        cars[index] = req.body;
        res.status(201).send({ msg: "car edited" });

    } else {
        res.status(404).send({ msg: "no car found" });
    }
});

app.get("/allcars", (req, res) => {
    const id = req.query.id;

    const car = cars.find((car) => car.id == id);
    if (car) {

        res.status(201).send(car);

    } else {
        res.status(404).send({ msg: "no car found" });
    }
});


app.get('/carsShow', function(req, res) {
    
    try {
    // console.log(__dirname);
            
        res.sendFile(__dirname+"/index.html");
   } catch (error) {
        console.log(error);    
   }
})

app.listen(port, () => {
    console.log(`the server is running ${port}`);

})
