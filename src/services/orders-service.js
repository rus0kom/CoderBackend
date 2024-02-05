import { ordersDao } from '../dao/dao-factory.js';
import OrderRepository from '../repositories/orders-repository.js';
import OrderDto from '../dto/create-order-dto.js';
import mailer from '../middlewares/mailer-middleware.js';

export default class OrdersService {
    constructor() {
        this.orderRepository = new OrderRepository(ordersDao);
    }

    async setData(req) {
        // const order = new OrderDto({
        //     // timestamp
        // });
        // await this.orderRepository.setData(order);
        await this.orderRepository.setData(req);
        // mailer({ title: 'Nueva venta' });
        // return order.asDto();
    }

    async getData() {
        const orders = await this.orderRepository.getData();
        return orders.map(order => order.asDto());
    }
}