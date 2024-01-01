import Products from "../models/products.model.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find({
            //  user: req.user.id,
        }).populate("user");
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: "Algo salio mal" });
    }
};

export const addProduct = async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock, date } = req.body

        const newProduct = new Products({
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            date,
            user: req.user.id,
        })

        const savedProduct = await newProduct.save()
        res.json(savedProduct)
    } catch (error) {
        return res.status(500).json({ message: "Algo salio mal" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id).populate("user");
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
        res.json(product)
    } catch (error) {
        return res.status(404).json({ message: 'Producto no encontrado' })
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: 'Producto no encontrado' })
    }
};

// export const updateProduct = async (req, res) => {
//     const { title, description, price, thumbnail, code, stock } = req.body;
//     await Products.findByIdAndUpdate(req.params.id, { title, description, price, thumbnail, code, stock });
//     req.flash('success_msg', 'Product Updated Successfully');
//     res.redirect('/products')
// };

export const updateProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!task) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
};

export const renderProductForm = async (req, res) => {
    res.render('products/new-product');
}

export const renderEditForm = async (req, res) => {
    const product = await Products.findById(req.params.id).lean();
    console.log(product);
    res.render('products/update-product', { product });
}