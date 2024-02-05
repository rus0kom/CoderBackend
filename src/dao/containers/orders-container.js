import Cart from '../../models/carts-model.js';
import Product from '../../models/products-model.js'

export default class MongoContainer {

    constructor(ordersModel){
        this.ordersModel = ordersModel;
        this.cartModel = Cart;
        this.productModel = Product;
    }

    async getData(id) {
        if(id) {
            try {
                const data = await this.ordersModel.findOne({ id: `${id}` });
                if(!data) {
                    return { id, status: 'not found' }
                } else {
                    return data;
                }
            } catch (error) {
                return { error }
            }
        } else {
            try {
                const data = await this.ordersModel.find();
                if(!data) {
                    return { status: 'not found' }
                } else {
                    return data;
                }
            } catch (error) {
                return { error }
            }
        }
    }

    async setData(user) {
        try {
            // await this.ordersModel.create({});
            const x = null;
            const cart = await this.cartModel.findOne();
            const newArray = cart.products.map(async element => {
                const aux = await this.productModel.findOne({id: element.id});
                if(aux.id == element.id) {
                    element = {
                        id: aux.id,
                        name: aux.name,
                        description: aux.description,
                        price: aux.price,
                        quantity: element.quantity,
                        image: aux.image
                    }
                }
                console.log(element);
            })
        } catch (error) {
            return { error };
        }
    }
};