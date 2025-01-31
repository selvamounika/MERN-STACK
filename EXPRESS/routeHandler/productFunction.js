const fs = require('fs');
const path = require('path');
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "model","product.json"),"utf-8"))

const getProducts =  (req, res) => {
    try {
        res.json({
            status: "success",
            count: jsonData.length,
            data: {
                products: jsonData
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch products",
            error: error.message
        });
    }
}

const getProductById = (req, res) => {
    let id = req.params.id*1;
    const data = jsonData.find((i)=>i.id==id)
    res.json({
        status:"success",
        data:data
    })
}

const createProduct = (req, res) => {
    try {
        const id = jsonData.length + 1;
        const newData = {
            id: id,
            ...req.body
        }
        jsonData.push(newData)
        fs.writeFileSync(path.join(__dirname, "..", "model","product.json"), JSON.stringify(jsonData))
        res.json({
            status: "success",
            data: newData
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to create product",
            error: error.message
        });
    }
}

const deleteProduct = (req, res) => {
    try {
        let id = req.params.id * 1
        const productExists = jsonData.find((i) => i.id == id);
        if (!productExists) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            });
        }
        let deletedData = jsonData.filter((i) => i.id != id)
        fs.writeFileSync(path.join(__dirname, "..", "model","product.json"), JSON.stringify(deletedData))
        res.status(204).json({
            status: "success",
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to delete product",
            error: error.message
        });
    }
}


const updateProduct = (req, res) => {
    try {
        let id = req.params.id * 1
        let productToUpdate = jsonData.find((i) => i.id == id)
        
        if (!productToUpdate) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            });
        }

        let index = jsonData.indexOf(productToUpdate)
        jsonData[index] = {
            ...productToUpdate,
            ...req.body,
            id: id // Preserve the original ID
        }
        
        fs.writeFileSync(path.join(__dirname, "..", "model","product.json"), JSON.stringify(jsonData))
        res.json({
            status: "success",
            data: jsonData[index]
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update product",
            error: error.message
        });
    }
}
const validate=(req,res,next)=>
{
    let body=req.body
    let header=req.headers
    if(header.token!=="pass")
        return res.status(400).json(
    {
        status:"fail",
        message:"unauth access"
    })
    
    
if(!body.name||!body.count)
{
return res.json({
    status:"fail",
    message:"bad request"
})
}
next()
}
const idvalidator=(req,res,next,value)=>
{
value=value*1
const item=jsonData.find((item)=>item.id===value)
if(!item)
{
    res.status(400).json({
        status:"valid status",
        message:"no products found"
    })
}
next()
}


module.exports = {
    getProducts, getProductById, createProduct, deleteProduct, updateProduct,validate,idvalidator
}