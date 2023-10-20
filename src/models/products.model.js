import mongoose from "mongoose";
const productCollection = 'products';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    thumbnail: {
        type: String,
    },
    code: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
    },
    stock: {
        type: Number,
        require: true
    },
    carts: {
        type: Array,
        default: []
    }
})

const productModel = mongoose.model(productCollection, productSchema);

export default productModel;