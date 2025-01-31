// const http = require("http")
// const path = require("path")
// const fs = require("fs")
// const tempfile = fs.readFileSync(path.join(__dirname, "template", "template.html"), "utf8")
// const server = http.createServer((req, res) => {

//     let path = req.url
//     if (path === "/home") {
//         res.end(data.replace("{{%CONTENT%}}", "You are at home"))
//     } else if (path === "/about") {

//         res.end(data.replace("{{%CONTENT%}}", "You are at about"))
//     } else if (path === "/contact") {
//         res.end(data.replace("{{%CONTENT%}}", "You are at contact"))
//     }



// });


// server.listen(3000, () => {
//     console.log("Server is running")
// })




// const http = require("http")
// const fs = require("fs")
// const jsonData = require("./product.json")
// console.log(jsonData)


// const server = http.createServer((req,res)=>{
//     // res.writeHead(200,{'Content-Type':'application/json'})
//     // res.end(JSON.stringify(jsonData))
//     let path = req.url
//     if(path === "/home" || path === "/"){
//         fs.readFile("index.html","utf-8",(err,data)=>{
//             res.writeHead(200,{'Content-Type':'text/html'})
//             res.end(data)
//         })
//     }
//     else if(path === "/contact"){
//         res.end("contact")
//     }
//     else if(path === "/about"){
//         res.end("about")
//     }
//     else if(path === "/product"){
//         res.end("product")
//     }
//     else{
//         res.end("404 not found")
//     }
// })

// server.listen(3000,()=>{
//     console.log("http://127.0.0.1:3000")
// })

const http = require("http")
const path = require("path")
const url = require("url")
const fs = require("fs")
const data = fs.readFileSync(path.join(__dirname, "templates", "template.html"), "utf8")
const data1 = fs.readFileSync(path.join(__dirname, "templates", "productlist.html"), "utf8")
const jsonData = JSON.parse(fs.readFileSync("product.json", "utf-8"))
let productHtmlArry = jsonData.map((prod) => {
    let output = data1.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace("{{%MODNAME%}}", prod.modeName)
    output = output.replace("{{%NAME%}}", prod.name)
    output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber)
    output = output.replace("{{%SIZE%}}", prod.size)
    output = output.replace("{{%TYPE%}}", prod.camera)
    output = output.replace("{{%PRICE%}}", prod.price)
    output = output.replace("{{%COLOR%}}", prod.color)
    output = output.replace("{{%ID%}}", prod.id)

    return output
})

function renderProduct(prod) {
    let output = data1.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace("{{%MODNAME%}}", prod.modeName)
    output = output.replace("{{%NAME%}}", prod.name)
    output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber)
    output = output.replace("{{%SIZE%}}", prod.size)
    output = output.replace("{{%TYPE%}}", prod.camera)
    output = output.replace("{{%PRICE%}}", prod.price)
    output = output.replace("{{%COLOR%}}", prod.color)
    output = output.replace("{{%ID%}}", prod.id)

    return output


}
productHtmlArry = productHtmlArry.join(",")





const server = http.createServer((req, res) => {
    let path = req.url


    path = path.toLowerCase()
    let { query, pathname } = url.parse(req.url, true)
    pathname = pathname.toLowerCase()
    console.log(pathname);


    if (path === "/home") {
        res.end(data.replace("{{%CONTENT%}}", "You are at home "))
    } else if (path === "/about") {
        res.end(data.replace("{{%CONTENT%}}", "You are at about "))
    } else if (path === "/contact") {
        res.end(data.replace("{{%CONTENT%}}", "You are at contact "))
    } else if (pathname === "/products") {
        //console.log(path.indexOf("/products"));

        if (query.id) {
            let id = query.id * 1


            let findOne = jsonData.find(item => item.id === id)
            res.end(data.replace("{{%CONTENT%}}", renderProduct(findOne)))
          console.log(id)
        } else {

            res.end(data.replace("{{%CONTENT%}}", productHtmlArry))
        }


    } else res.end("404")

})

server.listen(3000, () => console.log("server"))