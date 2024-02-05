import Cart from '../dto/create-cart-dto.js';

export default class CartRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getData() {
        const dtos = await this.dao.getData();
        return dtos.map(dto => new Cart(dto));
    }

    async deleteData(id) {
        const data = await this.dao.deleteData(id);
        return data;
    }
}