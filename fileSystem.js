import {promises as fs, writeFile} from "fs"

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, imagen, code, stock) => {

        ProductManager.id++;

        let newProduct = {
            title,
            description,
            price,
            imagen,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)

        console.log(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products)); 
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8");
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find(product => product.id === id)){
            console.log("Product not found")
        } else {
            console.log(respuesta3.find(product => product.id === id))
        }

     };

    deleteProductById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter));

        console.log("Product Deleted")

     };

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductById(id);
        let productOld = await this.readProducts();


        let productsModificado = [{id, ...producto}, ...productOld];
        await fs.writeFile(this.patch, JSON.stringify(productsModificado));
     };

}

const productos = new ProductManager

// productos.addProduct("titulo1", "description1", 1000, "img1", "code1", 5)
// productos.addProduct("titulo2", "description2", 2000, "img2", "code2", 10)
// productos.addProduct("titulo3", "description3", 3000, "img3", "code3", 15)

// productos.getProducts()
// productos.getProductById(2)
// productos.getProductById(4)

// productos.deleteProductById(2);
productos.updateProducts({
title: 'otrotitulo',
description: 'otradescription3',
price: 3500,
imagen: 'otraimg',
code: 'otrocode',
stock: 555,
id: 3
})

productos.getProducts()

