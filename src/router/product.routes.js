import { Router } from "express";
import ProductManager from "../controllers/ProductManager.js";
import productModel from "../models/products.model.js";
 
const ProductRouter = Router()
const product = new ProductManager();

ProductRouter.get("/", async (req, res) =>{
    const products = await productModel.find().lean().exec()
    console.log(products)
    res.render('layouts/list', { products })
    //res.send(await product.getProducts())
})

ProductRouter.get("/:id", async (req, res) =>{
    let id = req.params.id
    res.send(await product.getProductsById(id))
})

ProductRouter.post("/", async (req, res) =>{
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))

})

ProductRouter.put("/:id", async (req, res) => {
    let id = req.params.id
    let updateProducts = req.body;
    res.send(await product.updateProducts(id, updateProducts));
})

ProductRouter.delete("/:id", async (req, res) => {
    let id = req.params.id
    res.send(await product.deleteProducts(id))
})

export default ProductRouter