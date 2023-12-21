import { useProducts } from "../context/ProductContext"

function ProductCard({ product }) {

    const { deleteProduct } = useProducts();
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteProduct(product._id);
                    }}>delete</button>
                    <button>edit</button>
                </div>
            </header>
            <p className="text-slate-300">{product.description}</p>
            <p>{new Date(product.date).toLocaleDateString()}</p>
        </div>
    )
}

export default ProductCard