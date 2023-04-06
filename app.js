const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';
const alienRouter = require('./routes/aliens')


app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

app.use('/aliens', alienRouter)

app.listen(5003, () => {
    console.log("server is running on port 5003...")
})