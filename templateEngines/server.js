const express=require("express")
const path=require("path")
const app=express()
const {engine}=require("express-handlebars")
app.use(express.static(path.join(__dirname,"public")))
app.engine("hbs",engine({extname:"hbs",defaultLayout:false}))
//app.set("view engine","pug")
//app.set("view engine","ejs")
app.set("view engine","hbs")
app.listen(3000,()=>{console.log("server running")})
app.get("/home",(req,res)=>
{
   let data="test value"
   let array=[1,2,3,4,5]
   res.render("index",{data,array})
})
app.get("/about",(req,res)=>
{ let array=[1,2,3,4,5]
    res.render("about",{array})
})
app.get("/contact",(req,res)=>
{
    res.render("contact")
})