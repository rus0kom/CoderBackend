import Order from '../dto/create-order-dto.js';

export default class OrderRepository {
    constructor(container) {
        this.dao = container;
    }

    // async setData(data) {
    async setData({ user }) {
        await this.dao.setData(user);
        // await this.dao.setData(data.asDto());
    }

    async getData() {
        const dtos = await this.dao.getData();
        console.log(dtos);
        return dtos.map(dto => new Order(dto));
    }
}