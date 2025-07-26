const express =require("express")

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get("/",(req,res)=>{
    // res.send("home page  get route")
    let {name,email}= req.query;
    console.log("name :", name);
    console.log("email :", email);
    
    res.send("data found")

})
app.post("/",(req,res)=>{
    let {name,email}= req.body;
    console.log("name :", name);
    console.log("email :", email);
    res.send("data found in post")
    // res.send("post route")
})


app.get("/user/:id",(req,res)=>{
    // const {id} =req.params
    const id=req.params.id
    console.log("this  is id :",id);
    res.send("id found");
})

module.exports=app

