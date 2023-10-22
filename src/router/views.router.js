import { Router } from 'express';
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { addProduct, getProducts, getProductById, deleteProduct, updateProduct } from "../controllers/product.controller.js"
import { addCart, getCarts, getCartById, deleteCart, updateCart, getProductsInCart } from '../controllers/cart.controller.js';

const viewsRouter = Router();

//CARTS

viewsRouter.get('/cart', authRequired, getProductsInCart) //PROBANDO CARRITO POR USUARIO /DEVUELVE ARRAY VACIO

viewsRouter.get('/carts', authRequired, getCarts)

viewsRouter.get('/carts/:id', authRequired, getCartById)

viewsRouter.post('/carts', authRequired, addCart)

viewsRouter.delete('/carts/:id', authRequired, deleteCart)

viewsRouter.put('/carts/:id', authRequired, updateCart);

//PRODUCTS

viewsRouter.get('/products', getProducts)

viewsRouter.get('/products/:id', getProductById);

viewsRouter.post('/products', authRequired, addProduct);

viewsRouter.delete('/products/:id', authRequired, deleteProduct);

viewsRouter.put('/products/:id', authRequired, updateProduct);

//REGISTER

viewsRouter.get('/register', register)

viewsRouter.post('/login', login)

viewsRouter.post('/logout', logout)

viewsRouter.get('/profile', authRequired, profile)

export default viewsRouter;