import { NODE_ENV } from '../config/config.js';

import Carts from '../models/carts-model.js';
import Products from '../models/products-model.js';
import Orders from '../models/orders-model.js';
import Users from '../models/users-model.js';

let cartsDao, productsDao, ordersDao, usersDao;

switch (NODE_ENV) {
    case 'production':
        const { default: ProductsLocalContainer } = await import('./containers/products-container.js');
        const { default: UsersLocalContainer } = await import('./containers/users-container.js');
        const { default: CartsLocalContainer } = await import('./containers/carts-container.js');
        const { default: OrdersLocalContainer } = await import('./containers/orders-container.js');
        cartsDao = new CartsLocalContainer(Carts);
        productsDao = new ProductsLocalContainer(Products);
        ordersDao = new OrdersLocalContainer(Orders);
        usersDao = new UsersLocalContainer(Users);
        break;
    default:
        const { default: ProductsContainer } = await import('./containers/products-container.js');
        const { default: UsersContainer } = await import('./containers/users-container.js');
        const { default: CartsContainer } = await import('./containers/carts-container.js');
        const { default: OrdersContainer } = await import('./containers/orders-container.js');
        cartsDao = new CartsContainer(Carts);
        productsDao = new ProductsContainer(Products);
        ordersDao = new OrdersContainer(Orders);
        usersDao = new UsersContainer(Users);
        break;
};

export { cartsDao, productsDao, ordersDao, usersDao };