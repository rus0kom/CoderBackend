import { cartsDao } from '../dao/dao-factory.js';
import CartRepository from '../repositories/carts-repository.js';
import CartDto from '../dto/create-cart-dto.js';

export default class CartsService {
    constructor() {
        this.cartRepository = new CartRepository(cartsDao);
    }

    async setData({ body }) {
        const cart = new CartDto({
            ...body
        });
        await this.cartRepository.setData(cart);
        return cart.asDto();
    }

    async getData() {
        const carts = await this.cartRepository.getData();
        return carts.map(cart => cart.asDto());
    }
    
    async deleteData({ params }) {
        return await this.cartRepository.deleteData(params.id);
    }
}