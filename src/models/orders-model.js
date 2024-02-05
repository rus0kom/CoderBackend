import mongoose from 'mongoose';

const productsSchema = {
    productId: {
        type: String,
        required: true
    },
    name: String,
    description: String,
    price: {
        type: Number,
        required: true
    },
    image: String,
    quantity: {
        type: Number,
        required: true
    }
}

const userSchema = {
    clientId: String
}

const schema = {
    id: {
        type: String,
        required: true
    },
    date: String,
    clientId: {
        type: userSchema,
        required: true
    },
    products: [productsSchema]
}

mongoose.set('strictQuery', false);
 
const ordersSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId }, { timestamps: true });
const Orders = mongoose.model('Orders', ordersSchema, 'orders');

export default Orders;