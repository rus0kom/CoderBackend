import ProductsService from '../services/products-service.js';

const products = new ProductsService();

export async function getProductsController(req, res) {
    const data = await products.getData(req);
    res.json(data);
}

export async function postProductController(req, res) {
    if(req.isAuthenticated() && req.user.name === 'admin') {
        await products.setData(req);
        res.json({ message: 'product loaded' });
    } else {
        res.json({ permission: 'denied'});
    }
}

export async function putProductController(req, res) {
    if(req.isAuthenticated() && req.user.name === 'admin') {
        await products.updateData(req);
        res.json({ message: 'product updated' });
    } else {
        res.json({ permission: 'denied'});
    }
};

export async function deleteProductController(req, res) {
    if(req.isAuthenticated() && req.user.name === 'admin') {
        await products.deleteData(req);
        res.json({ message: 'product deleted' });
    } else {
        res.json({ permission: 'denied'});
    }
};