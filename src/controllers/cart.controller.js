import cartsModel from "../models/carts.model.js";
import Products from "../models/products.model.js";

// RELACIONAR CARRITO CON LOS PRODUCTOS

export const getProductsInCart = async (req, res) => {
    const products = await Products.find({
       user: req.user.id
    }).lean().populate('user')
    res.json(products)
    console.log(req.user) 
};

export const getCarts = async (req, res) => {
    const carts = await cartsModel.find().lean()
    res.render('carts', {carts})
};

export const addCart = async (req, res) => {
    const { id, products } = req.body
    const newCart = new cartsModel({
       id,
       products,
    })

    const savedCart = await newCart.save()
   res.json(savedCart);
};

export const getCartById = async (req, res) => {
    const cart = await cartsModel.findById(req.params.id)
    if (!cart) return res.status(404).json({ message: 'Producto no encontrado'})
    res.json(cart)
};

export const deleteCart = async (req, res) => {
    const cart = await cartsModel.findByIdAndDelete(req.params.id)
    if (!cart) return res.status(404).json({ message: 'Producto no encontrado'})
    res.json(cart)
};

export const updateCart = async (req, res) => {
    const cart = await cartsModel.findByIdAndUpdate(req.params.id, req.body)
    if (!cart) res.status(404).json({ message: 'Producto no encontrado'})
    res.json(cart)
};

