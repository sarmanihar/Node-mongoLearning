const express = require('express');
const res = require('express/lib/response');
const app = express();

const logger = require('./logger');
const authorize = require('./authorize')


//app.use(logger);
//app.use('/api', logger);
//thsi wil add logger function to only those paths starting with "/api"


app.use([logger, authorize]);
//order of middleware function matters which will be execute first
//multiple middle where fuctions




//all te midddle_where functions or al the app.use() s should be always at the top.else it wont work in the app.get() s above it



/*const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    //when you work with  middle where you must pass it onto a next middle where OR res.send();
    // res.send('Testing') 
    next()
}*/

app.get('/', (req, res) => {
    //http://localhost:5003/?user=john


    console.log(req.user);
    //from authorization middleware function


    /*
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);  
    */
    //now instead of writing the logic again and again we will use the 
    //middle where function logger
    res.send('Home')
});
/*app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})*/
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})
app.listen(5003, () => {
    console.log("server is listening on port 5003");
})