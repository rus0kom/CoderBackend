import { Router } from "express";
// import ProductManager from "../controllers/ProductManager.js";
import Carts from "../controllers/CartManager.js";

const CartRouter = Router();
const cartsManager = new Carts();

//Obtener los carritos
CartRouter.get('/', async (req, res) => {
    try {
        const carts = await cartsManager.readProduct(); 
        res.send({ status: 'success', payload: carts }); 
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
});

//Guardar el carrito
CartRouter.post('/', async (req, res) => {
    const { id } = req.body;

    if(!id) {
        return res.status(400).send({ status: 'error', error: 'Campos Incompletos' })
    }

    try {
        const result = await cartsManager.writeCarts({
           id
        });

        res.status(201).send({ status: 'success', payload: result });  
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }

});

export default CartRouter;









// import { Router } from "express";
// import CartManager from "../controllers/CartManager.js";

// const CartRouter = Router()
// const carts = new CartManager

// CartRouter.post("/", async (req, res) => {
//     res.send(await carts.addCarts())
// })

// CartRouter.get("/", async (req,res) => {
//     res.send(await carts.readCarts())
// })

// CartRouter.get("/:id", async (req,res) => {
//     res.send(await carts.getCartsById(req.params.id))
// })

// CartRouter.post("/:cid/products/:pid", async (req, res) => {
//     let cartId = req.params.cid
//     let productId = req.params.pid
//     res.send(await carts.addProductInCart(cartId, productId))
// })

// export default CartRouter