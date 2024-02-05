import mongoose from 'mongoose';

const productSchema = {
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
}

const schema = {
    id: String,
    products: [productSchema]
}

mongoose.set('strictQuery', false);
 
const cartSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Cart = mongoose.model('Cart', cartSchema, 'carts');

export default Cart;