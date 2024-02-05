import Products from '../../models/products-model.js';

export default class MongoContainer {

    constructor(cartModel){
        this.cartModel = cartModel;
        this.productModel = Products;
    }

    async getData(id) {
        if(id) {
            try {
                const data = await this.cartModel.findOne({ id: `${id}` });
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
                const data = await this.cartModel.find();
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

    async setData({ productId }) {
        try {
            const productExist = await this.productModel.findOne({ id: productId });
            const productInCart = await this.cartModel.findOne({ 'products.id': productId });
            const emptyCart = await this.cartModel.find().exists('_id');

            if(productExist && !productInCart) {
                if(emptyCart.length == 0) {
                    await this.cartModel.create({ products: { id: productId, quantity: 1 }});
                } else {
                    await this.cartModel.updateOne({ $push: { products: { id: productId, quantity: 1 }}});
                }
            } 

            if(productExist && productInCart) {
                productInCart.products.map(element => {
                    if(element.id === productId) {
                        element.quantity++;
                    }
                })
                await this.cartModel.updateOne(productInCart);
            } 
            
            if(!productExist) {
                return { status: 'product not found' };
            }
        } catch (error) {
            return { error };
        }
    }

    async deleteData(id) {
        try {
            const productInCart = await this.cartModel.findOne({ 'products.id': id });

            if(productInCart) {
                const newCart = productInCart.products.filter(element => element.id !== id);
                await this.cartModel.updateOne({ products: newCart });
            } else {
                return { status: 'product not found' };
            }
        } catch (error) {
            return { error };
        }
    }
};