const express = require('express')
const path = require('path')
const app = express();
// const { readFileSync } = require('fs');
// const index_html = readFileSync('./index.html')


app.use(express.static('./public')) //best thing in express.No need of calling css and html again
    /*app.get('/', (req, res) => {
        //res.send(index_html)

        //sendFile not send
        res.sendFile(path.resolve(__dirname, './index.html'))
    })*/

//other ways of sending files:
//Adding ro statics assets
//=>which we alreadt done above.so even if we dont have the 
// res.sendFile(path.resolve ... etc.stil its gonna be workin fine
//SSR




//Learn middle where
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(5003, () => {
    console.log('server is on port 5003...');
})