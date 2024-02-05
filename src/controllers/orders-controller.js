import OrdersService from '../services/orders-service.js';

const orders = new OrdersService();

export async function getOrdersController(req, res) {
    if(req.isAuthenticated()) {
        const data = await orders.getData();
        res.json(data);
    } else {
        res.json({ message: 'product not loaded to cart' });
    }
}

export async function postOrdersController(req, res) {
    if(req.isAuthenticated()) {
        await orders.setData(req);
        res.json({ message: 'product loaded to cart' });
    } else {
        res.json({ permission: 'denied'});
    }
}