import mongoose from "mongoose";
const productCollection = 'productos'

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: Number,
    stock: Number,
    id: Number,
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel