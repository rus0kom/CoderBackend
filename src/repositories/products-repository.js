import Product from '../dto/create-product-dto.js';

export default class ProductsRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getData(id) {
        if(id) {
            return await this.dao.getData(id);
        } else {
            const data = await this.dao.getData();
            return data.map(dto => new Product(dto));
        }
    }

    async updateData(id, data) {
        return await this.dao.updateData(id, data);
    }

    async deleteData(id) {
        return await this.dao.deleteData(id);
    }
}