// port   localhost    http
const http=require("http")

let server=http.createServer((req,res)=>{
    if (req.url === "/" &&req.method==="GET"){
        res.end("hoome route from get")
    }
    if (req.url === "/" &&req.method==="POST"){
        res.statusCode(200).end("hoome route from post")
    }
    if (req.url === "/about"){
        res.end("about page")
    }
})
let port =3000
server.listen(3000,()=>{
    console.log("server is running on port no: ",port);

})