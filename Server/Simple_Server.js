const http = require('http')
http.createServer((req, res) => {
    console.log("server running at 4000")
    res.write("<h1>hi this is a test</h1>")
    res.end();
}).listen(4000)
console.log("test")