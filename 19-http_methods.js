//there are various types of http status code
//by default mthod in browser is always get
//mainly there are 3 methid
//get,post,put etc
//while cloning a backend project  =>always remove the remote
//using the command =>"rm -rf .git"

const http = require('http')
const { readFileSync /*not arandom word.its a standar word*/ } = require('fs')
const homepage = readFileSync('./index.html')
const homecss = readFileSync('./index.css')
    //here "./" is required while in html and css linking no ./ is required



/*const server = http.createServer((req, res) => {
    console.log('user hit the server');
    res.end('home page')
    //here for http://localhost:5003/xyz anything it will al
    //always show home page.so we have to set different url
    //s for different responses
})*/
const server = http.createServer((req, res) => {
    // console.log(req)
    //console.log(req.method);
    //console.log(req.url);
    //console.log('user hit the server');
    const url = req.url;
    if (url === '/') {
        res.writeHead(200 /*status code=>we are sending back*/ , { 'content-type': 'text/html' } /*MIME types*/ )
            // res.write('<h1>home page</h1>')
        res.write(homepage) //its not he gonnna load the css linked with the html page.so we have to import the css separately
        res.end() //madetory
    } else if (url === '/index.css') /*this will bring the html and css together.coz the html is already calling the index.css page*/ {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homecss)
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
    //best source for naything http related (http staus code mozila docs)
})
server.listen(5003)