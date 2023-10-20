import { Router } from 'express';
import Products from '../controllers/ProductManager.js'
import Carts from '../controllers/CartManager.js'
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const viewsRouter = Router();

const productsManager = new Products();
const cartsManager = new Carts();

viewsRouter.get('/products', async (req, res) => {
    try {
        const products = await productsManager.readProducts();
        res.render('products', { products })
    } catch (error) {
        console.error(error.message)
    }
})

viewsRouter.get('/carts', async (req, res) => {
    try {
        const carts = await cartsManager.readCarts();
        res.render('carts', { carts })
    } catch (error) {
        console.error(error.message)
    }
})

viewsRouter.post('/register', register)
viewsRouter.post('/login', login)
viewsRouter.post('/logout', logout)
viewsRouter.get('/profile', authRequired, profile)

export default viewsRouter;