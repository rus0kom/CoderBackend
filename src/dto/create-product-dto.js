function asegurarValorNoNulo(valor, errorMsg) {
    if (valor === undefined || valor === null)
        throw new Error(errorMsg);
    return valor;
}

function asegurarValorPositivo(valor, errorMsg) {
    if (valor === undefined || valor === null)
        throw new Error(errorMsg);
    return valor;
}

export default class Product {
    #id;
    #name;
    #description
    #price;
    #image;

    constructor({ id, name, description, price, image }) {
        asegurarValorNoNulo(name, 'el nombre no puede ser nulo');
        asegurarValorNoNulo(price, 'el precio no puede ser nulo');
        asegurarValorNoNulo(image, 'la imagen no puede ser nula');

        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#image = image;
        this.setPrice(price);
    }

    setPrice(price) {
        asegurarValorNoNulo(price, 'el precio no puede ser nulo');
        asegurarValorPositivo(price, 'el precio debe ser positivo');
    }

    asDto() {
        return Object.freeze({
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            image: this.#image,
        });
    }
}