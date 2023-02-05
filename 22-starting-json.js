//JavaScript Object Notation (JSON)
const { products, people } = require('./data');
//better awesome way
//in the above type like "readFileSync" name product and people
//have to be exactly simillar with data.js



//const xyz = require('./data')
//here xys is by default an object
//here "xyz" is just a random name
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //res.json([{ name: "json" }, { name: "sushi" }]);
    res.json(products); //here products is an array of objects
    // res.json(people);
    //res.json(xyz) //here xys is by default an object
})

app.listen(5003, () => {
    console.log("server is listening on port 5003");
})