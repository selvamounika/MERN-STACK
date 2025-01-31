const app=require("./app")
let port=process.env.PORT || 3000


app.listen(3000,()=>{

    console.log("http://localhost:3000")
})