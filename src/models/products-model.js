import mongoose from 'mongoose';

export const schema = {
    id: String,
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: String,
        required: true
    },
    image: String
}

mongoose.set('strictQuery', false);
 
const productsSchema = new mongoose.Schema(schema, { driver: mongoose.ObjectId });
const Products = mongoose.model('Products', productsSchema, 'products');

export default Products;