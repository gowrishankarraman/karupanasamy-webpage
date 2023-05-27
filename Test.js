const http=require('http')
const { hostname } = require('os')
const server=http.createServer((req,res)=>{
    res.write("hai the web page")
    res.end()
})

server.listen(5000,()=>console.log(`server port no ${hostname}`))
