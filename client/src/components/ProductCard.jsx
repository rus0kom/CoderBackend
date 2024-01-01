import { useProducts } from "../context/ProductContext"
import { Link } from 'react-router-dom'

function ProductCard({ product }) {

    const { deleteProduct } = useProducts();
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <Link to={`/products/${product._id}`}
                        className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >Edit</Link>
                     <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            deleteProduct(product._id);
                        }}>Delete</button>
                </div>
            </header>
            <p className="text-slate-300">{product.description}</p>
            <p>Ultima modificacion: {new Date(product.date).toLocaleDateString()}</p>
        </div>
    )
}

export default ProductCard