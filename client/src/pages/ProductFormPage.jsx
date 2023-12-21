import { useForm } from "react-hook-form"
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function ProductFormPage() {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useProducts();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
    navigate('/products')
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <h1>Add Product</h1>

      <form onSubmit={onSubmit}>

        <input type="text" placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <textarea rows="3" placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <input type="number" placeholder="Price"
          {...register("price")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <input type="text" placeholder="Thumbnail"
          {...register("thumbnail")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <input type="number" placeholder="Code"
          {...register("code")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <input type="number" placeholder="Stock"
          {...register("stock")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <button>Save</button>
      </form>

    </div>
  )
}

export default ProductFormPage