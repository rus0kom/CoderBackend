export default class ProductsRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.saveImage(data.asDto());
    }
}