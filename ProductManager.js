class ProductManager {
    #product

    constructor() {
        this.#product = []
    }

    #generateID = () => {
        let id
        if (this.#product.length === 0) id = 1 
        else id = this.#product[this.#product.length-1].id + 1
        return id
    }

    getProduct = () => {
        return this.#product
    }

    existId(id) {
        return this.#product.find((producto) => producto.id === id)
    }

    getProductById(id) { 
        !this.existId(id) ? console.error('Not Found') : console.error(this.existId(id))
        
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Incompleted Fields')
            return
        }
        
        for (let i = 0; i < this.#product.length; i++){
            if (this.#product[i].code === code){
                console.log(`This code ${code} is using alredy`);
                break;
            }
        }
       
        let id = this.#generateID()
        
        let newProduct = {
            id, title, description, price, thumbnail, code, stock
        }
        this.#product.push(newProduct)
    }
}

const productManager = new ProductManager
productManager.addProduct('Termo', 'Envase para agua que mantiene temperatura', '$100', 'link', '123', '15')
productManager.addProduct('Taza', 'Envase para agua que mantiene temperatura', '$13', 'link', '123', '15')
productManager.addProduct('asd', 'Envase para agua que mantiene temperatura', '$13')
productManager.addProduct('Taza', 'Envase para agua que mantiene temperatura', '$13', 'link', '123', '15')
console.log(productManager.getProduct())
console.log(productManager.getProductById(3))