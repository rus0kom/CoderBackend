import { Router } from 'express';
import { getOrdersController, postOrdersController } from '../controllers/orders-controller.js';

const ordersRouter = new Router();

ordersRouter.get('/', getOrdersController);
ordersRouter.post('/', postOrdersController);

export default ordersRouter;