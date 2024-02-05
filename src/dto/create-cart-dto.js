export default class CartDto {
    #id;
    #productId;

    constructor({id, productId}) {
        this.#id = id;
        this.#productId = productId;
    }
    
    asDto() {
        return Object.freeze({
            id: this.#id,
            productId: this.#productId
        });
    }
}