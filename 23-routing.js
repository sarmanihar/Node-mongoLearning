const { products, people } = require('./data');
const express = require('express');
const app = express();

app.get /*this get shows get request*/ ('/', (req, res) => {

    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
            const { id, name, image } = product;
            return { id, name, image };
            //this return means we are nt completely ending the
            //callback function.instead we are storing returned data
            //to newProducts;
        })
        //newProducts is a new ARRAY of OBJECTS having all data of products
        //except price and desc.
        //Thus we can separet datas and send only a prtion of it.
    res.json(newProducts)
})


/*app.get('/api/products/1', (req, res) => {
    const singleProducts = products.find((product) => product.id === 1);
    //find method is imp
    res.json(singleProducts)
})*/


//better method then the above one:

app.get('/api/products/:productID' /* :productID is a standard word.not a randm word*/ , (req, res) => {
    // console.log(req);
    console.log(req.params);
    const { productID } = req.params;
    const singleProducts = products.find((product) => product.id === Number(productID));
    if (!singleProducts) {
        return res.status(404).send('Product does not exits')
    }
    res.json(singleProducts)
})


app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("hello world")
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products] //this ... mthod =>used to sort an array of objects
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
            //i thought slice is only for strings.imp
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send('no products mathcked your serach')
        return res.status(200).json({ sucess: true, data: [] })
            //you are returnig here the res.json.
            //else it will xecute the lat line.i.e sorted products
    }
    return res.status(200).json(sortedProducts)
        //always write return.is a better practice
        //res.send("hello world")
})
app.listen(5003, () => {
    console.log("server is listening on port 5003");
})