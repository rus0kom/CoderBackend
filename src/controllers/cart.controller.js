import cartsModel from "../models/carts.model.js";

export default class Carts {
    constructor () {
        console.log('Trabajando carritos desde DB')
    }

    readCarts = async () => {
        const carts = await cartsModel.find().lean();
        return carts;
    }

    writeCarts = async (cart) => {
        const result = await cartsModel.create(cart);
        return result;
    }
}