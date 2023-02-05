const express = require('express')
const app = express();
//first importing modules and then invocate

//OR

//const app = require('expess')

//METHODS:
/*
//app.get
//app.post
//app.put
//app.delete
*/
//app.all/* woks as all the 4 above */

//app.use/*for middle where */
//app.listen



//you can check the status codes using network in console.
app.get('/', (req, res) => {
    console.log("use hit the resouce")
    res.send('HOME PAGE');
});
app.get('/about', (req, res) => {
    res.send('about page')
});
//for 404 there is no page required .its already there by dafault
//my own made 404 page
app.all('*', (req, res) => {
    /*however express send status code by intself.still its a safer way to set the status on youtr own*/
    res.status(404).send('<h1>resource not found</h1>')
});

app.listen(5003, () => {
    console.log('server is listening on pot 5003');
});