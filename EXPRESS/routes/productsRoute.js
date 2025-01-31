const express = require('express');
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct,validate,idvalidator} = require("../routeHandler/productFunction");
const productRoutes=express.Router()
productRoutes.param("id",idvalidator)
productRoutes.route("/").
get(getProducts).
post(validate,createProduct)

productRoutes.route("/:id")
.get(getProductById)
.delete(deleteProduct)
.patch(updateProduct)
.put(updateProduct)

module.exports=productRoutes