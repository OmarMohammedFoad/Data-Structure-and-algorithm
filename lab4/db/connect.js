const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri);


async function run() {
    try {
        console.log("connect to db");
        await client.connect()
        return client.db('my_users');
        
    } catch (err) {
        console.log("connection failed :", err);

        process.exit(1);
    }
}


module.exports = {run}
