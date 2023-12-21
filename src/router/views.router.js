import { Router } from 'express';
import { login, register, renderRegisterForm, renderLoginForm, logout, profile, verifyToken } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import {
    addProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    renderProductForm,
    renderEditForm
} from "../controllers/product.controller.js"
import { addCart, getCarts, getCartById, deleteCart, updateCart, getProductsInCart } from '../controllers/cart.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';


const viewsRouter = Router();

//HACER LAS VISTAS DE LOGIN

//CARTS

viewsRouter.get('/carts', authRequired, getCarts)

viewsRouter.get('/carts/:id', authRequired, getCartById)

viewsRouter.post('/carts', authRequired, addCart)

viewsRouter.delete('/carts/:id', authRequired, deleteCart)

viewsRouter.put('/carts/:id', authRequired, updateCart);

//PRODUCTS

viewsRouter.get('/products', getProducts);

viewsRouter.get('/products/new-product', authRequired, renderProductForm);

viewsRouter.post('/products/new-product', authRequired, addProduct);

viewsRouter.get('/products/:id', getProductById);

viewsRouter.post('/products', authRequired, addProduct);

viewsRouter.delete('/products/delete/:id', authRequired, deleteProduct);

viewsRouter.get('/products/edit/:id', authRequired, renderEditForm);

viewsRouter.put('/products/edit/:id', authRequired, updateProduct);

//REGISTER

viewsRouter.post('/logout', logout)

viewsRouter.get('/users/profile', authRequired, profile)

viewsRouter.get('/users/register', renderRegisterForm, register);

viewsRouter.post('/users/register', validateSchema(registerSchema), register);

viewsRouter.get("/users/verify", verifyToken);

viewsRouter.get('/users/login', renderLoginForm);

viewsRouter.post('/users/login', validateSchema(loginSchema), login);

viewsRouter.get('/users/logout', logout)

export default viewsRouter;