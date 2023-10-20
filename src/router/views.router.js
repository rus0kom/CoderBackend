import { Router } from 'express';
import Products from '../controllers/ProductManager.js'
import Carts from '../controllers/CartManager.js'

const router = Router();

const productsManager = new Products();
const cartsManager = new Carts();

router.get('/products-view', async (req, res) => {
    try {
        const products = await productsManager.readProducts();
        res.render('products', { products })
    } catch (error) {
        console.error(error.message)
    }
})

router.get('/carts-view', async (req, res) => {
    try {
        const carts = await cartsManager.readProducts();
        res.render('carts', { carts })
    } catch (error) {
        console.error(error.message)
    }
})

export default viewsRouter;