const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/Nodejs-creating-simple-API/data.json', 'utf-8')
const myData = JSON.parse(data)

const server = http.createServer((req,res)=>{
    const reqPath = req.url

    var array = [
        {
            "id" : 0,
            "car" : "Tesla"
        },
        {
            "id" : 1,
            "car" : "Toyota"
        },
        {
            "id" : 2,
            "cae" : "Jaguar"
        }
    ]

    if(reqPath === '/Api'){   
            res.writeHead(200, {'Content-type' : 'application/json'})
            res.end(data)
            console.log(myData[0])
}
    else if(reqPath === '/login'){
        res.end(JSON.stringify(array))
}        
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-header' : 'my header'
        })
        res.end( "<h1>Page not found</h1>")
    }
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening on port 8000")
})