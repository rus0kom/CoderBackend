import Products from "../models/products.model.js"

export const getProducts = async (req, res) => {
    const products = await Products.find().lean()
    res.render('products', {products})
};

export const addProduct = async (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body

    console.log(req.user)
    
    const newProduct = new Products({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        user: req.user.id,
    })

    const savedProduct = await newProduct.save()
   res.json(savedProduct);
};

export const getProductById = async (req, res) => {
    const product = await Products.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Producto no encontrado'})
    res.json(product)
};

export const deleteProduct = async (req, res) => {
    const product = await Products.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ message: 'Producto no encontrado'})
    res.json(product)
};

export const updateProduct = async (req, res) => {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body)
    if (!product) res.status(404).json({ message: 'Producto no encontrado'})
    res.json(product)
};
