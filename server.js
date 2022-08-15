const http=require('http')
const {readFileSync} = require('fs')
const homepage= readFileSync('./index.html')
const server=http.createServer((req,res)=>{
    const url = req.url
    res.writeHead(200,{'content-type':'text/html'})
    if (url=="/url"){
        res.end(homepage)     
    }
    else if (url=="/"){
        res.end("<h1>Home page</h1>")
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})

        res.end("<h1>Resource not found</h1>")
    }
    
    
})


server.listen(5000)