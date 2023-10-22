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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    }
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

export default cartsModel;
