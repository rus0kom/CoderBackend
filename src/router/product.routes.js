import { Router } from "express";
// import ProductManager from "../controllers/ProductManager.js";
import Products from '../controllers/ProductManager.js'

const ProductRouter = Router();
const ProductManager = new Products();

//Obtener los productos
ProductRouter.get('/', async (req, res) => {
    try {
        const products = await ProductManager.readProduct(); 
        res.send({ status: 'success', payload: products }); 
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
});

//Guardar el producto
ProductRouter.post('/', async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;

    if(!title || !description || !price || !code || !stock) {
        return res.status(400).send({ status: 'error', error: 'Campos Incompletos' })
    }

    try {
        const result = await ProductManager.writeProduct({
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        });

        res.status(201).send({ status: 'success', payload: result });  
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }

});

//Actualizar el producto
ProductRouter.put('/id', async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;
    const { id } = req.params;

    if(!title || !description || !price || !code || !stock) {
        return res.status(400).send({ status: 'error', error: 'Campos Incompletos' })
    }

    try {
        const result = await ProductManager.updateProduct(id, {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
        res.send({ status: 'success', payload: result })
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
})

export default ProductRouter;
 
// const ProductRouter = Router()
// const product = new ProductManager();

// ProductRouter.get("/", async (req, res) =>{
//     const products = await productModel.find().lean().exec()
//     console.log(products)
//     res.render('layouts/list', { products })
//     //res.send(await product.getProducts())
// })

// ProductRouter.get("/:id", async (req, res) =>{
//     let id = req.params.id
//     res.send(await product.getProductsById(id))
// })

// ProductRouter.post("/", async (req, res) =>{
//     let newProduct = req.body
//     res.send(await product.addProducts(newProduct))

// })

// ProductRouter.put("/:id", async (req, res) => {
//     let id = req.params.id
//     let updateProducts = req.body;
//     res.send(await product.updateProducts(id, updateProducts));
// })

// ProductRouter.delete("/:id", async (req, res) => {
//     let id = req.params.id
//     res.send(await product.deleteProducts(id))
// })

// export default ProductRouter