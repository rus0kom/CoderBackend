import { createContext, useContext, useState } from "react";
import { createProductRequest, getProductRequest, getProductsRequest, deleteProductRequest } from '../api/product'

const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }

    return context;
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createProduct = async (product) => {
        const res = await createProductRequest(product)
        console.log(res);
    }

    const deleteProduct = async (id) => {
        const res = await deleteProductRequest(id);
        console.log(res.data)
    };

    return (
        <ProductContext.Provider value={{
            products,
            createProduct,
            getProducts,
            deleteProduct,
        }}>
            {children}
        </ProductContext.Provider>
    );
}