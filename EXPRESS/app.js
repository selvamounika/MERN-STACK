// const http = require('http');

// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('Request received');
//     res.end('Hello World');
// });

// server.listen(3000);

// const events = require('events');
// const CustomEvent = new events.EventEmitter();

// CustomEvent.on("cs",()=>{
//     console.log("Event has been triggered");
// })

// CustomEvent.emit("cs");


// const express = require('express')

// const app = express();

// app.get('/', (req, res) => {
//     // console.log("Server called");
//     // res.send('Hello World');
//     // res.json({ok:true})
//     res.status(200).sendFile(__dirname + '/index.html');
//     res.setHeader('Content-Type', 'text/html');
//     res.set({'Name':'SECE','Location':'CBE'});
// });

// app.listen(3000,()=>{
//     console.log("Server is running")
// });

const express = require('express');
const morgan=require("morgan")
const dotenv=require("dotenv")
const productRoutes=require("./routes/productsRoute")
dotenv.config({path:"./config.env"})

const app = express();
app.use(express.json());
app.use(morgan("dev"))
app.use("/api/v1/products",productRoutes)


module.exports=app
// app.get("/*",(req,res)=>{
//     res.json({
//         status:"error",
//         message:"Page not found"
//     })
// })