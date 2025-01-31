const express=require("express")
const app=express()
const qrcode=require("qrcode")
const path=require("path")
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.get("/home",(req,res)=>
{
res.sendFile(path.join(__dirname,"views","index.html"))
})

app.post("/qr",async(req,res)=>
{let link=req.body.data
    let genQr= await qrcode.toDataURL(link)
   res.json(genQr)
})
app.get("/qr",async(req,res)=>
{let link=req.query.link
    let genQr= await qrcode.toDataURL(link)
   res.json(genQr)
})
app.listen(3000,()=>
{console.log("server running")
})
