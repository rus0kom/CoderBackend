import mongoose from "mongoose";

const cartsCollection = 'carts';

const cartsSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    products: {
        type: Array,
        quantity: Number,
        default: []
    }
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

export default cartsModel
