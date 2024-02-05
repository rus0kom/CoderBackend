export default class OrderDto {
    #id;
    #date;
    #clientId;
    #products;

    constructor({ id, date, clientId, products }) {
        this.#id = id;
        this.#date = date;
        this.#clientId = clientId;
        this.#products = products;
    }

    asDto() {
        return Object.freeze({
            id: this.#id,
            date: this.#date,
            clientId: this.#clientId,
            products: this.#products,
        });
    }
}