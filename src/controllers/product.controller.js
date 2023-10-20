import productModel from "../models/products.model.js";

export default class Products {
    constructor () {
        console.log('Trabajando productos desde DB')
    }

    readProducts = async () => {
        const products = await productModel.find().lean();
        return products;
    }

    writeProducts = async (product) => {
        const result = await productModel.create(product);
        return result;
    }

    updateProduct = async (id) => {
        const result = await productModel.updateOne({ _id: id}, product);
        return result;
    }
};