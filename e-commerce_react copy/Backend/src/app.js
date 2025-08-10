// const express =require("express")
// const productRouter =require("./routes/product.router")
// const indexRouter= require("./routes/index.router")
// const app=express()
// const path=require("path")

// // app.use("/",productRouter)


// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// app.set("view engine","ejs")
// app.set("views",path.join(__dirname,"views"))
// app.use(express.static(path.join(__dirname,"../public")))

// //http://localhost:3000/products/
// app.use("/products",productRouter)
// app.use("/",indexRouter)

// module.exports=app


const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const userRouter = require("./routes/user.router")
const app = express()
const path = require("path")
const morgon = require("morgan")
const cors = require("cors")

app.use(morgon("dev"))


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.use("/", indexRouter) 
app.use("/users", userRouter)
app.use("/products",productRouter)


module.exports = app