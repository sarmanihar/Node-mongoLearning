const express = require('express');
//npm i morgan
const morgan = require('morgan')
app.use(morgan('tiny')); //third party middlware functions.
//study docs for it
app.listen(5003, () => {
    console.log("server is listening on port 5003");
})