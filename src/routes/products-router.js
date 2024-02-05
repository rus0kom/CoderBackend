import { Router } from 'express';
import passport from "passport";

import { getProductsController, postProductController, putProductController, deleteProductController } from '../controllers/products-controller.js';

const productsRouter = new Router();

productsRouter.get('/:id?', getProductsController);
productsRouter.post('/', postProductController);
productsRouter.put('/:id', putProductController);
productsRouter.delete('/:id', deleteProductController);

export default productsRouter;