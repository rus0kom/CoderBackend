import crypto from 'crypto'
import { productsDao } from '../dao/dao-factory.js';
import ProductsRepository from '../repositories/products-repository.js';
import ProductDto from '../dto/create-product-dto.js';

function generarId() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class ProductsService {
    constructor() {
        this.productsRepository = new ProductsRepository(productsDao);
    }

    async setData({body}) {
        const product = new ProductDto({
            id: generarId(),
            ...body
        });
        await this.productsRepository.setData(product);
        return product.asDto();
    }

    async getData({params}) {
        if(params.id) {
            return await this.productsRepository.getData(params.id);
        } else {
            const data = await this.productsRepository.getData();
            return data.map(product => product.asDto());
        }
    }

    async updateData({params, body}) {
        return await this.productsRepository.updateData(params.id, body);
    }

    async deleteData({params}) {
        return await this.productsRepository.deleteData(params.id);
    }
}