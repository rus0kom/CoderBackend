import express, { json, urlencoded } from "express";

import imagesRouter from "./routes/load-images-router.js";
import cartsRouter from "./routes/carts-router.js";
import ordersRouter from "./routes/orders-router.js";
import productsRouter from "./routes/products-router.js";
import usersRouter from "./routes/users-router.js";
import missingRoutes from './routes/missing-routes-router.js';
import loginRouter from './routes/login-router.js';
import logoutRouter from './routes/logout-router.js';

import sessionHandler from './middlewares/session-middleware.js';
import passportMiddleware from "./middlewares/passport-middleware.js";
import connect from "./middlewares/db-connection.js";

const app = express();
connect();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('src/static'));
app.use(sessionHandler);
app.use(passportMiddleware.initialize());
app.use(passportMiddleware.session());
app.use('/api/images', imagesRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/shoppingcartproducts', cartsRouter);
app.use('/api/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('*', missingRoutes);

export default app;