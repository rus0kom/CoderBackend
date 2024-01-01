import { useForm } from "react-hook-form"
import { useProducts } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id);
        console.log(product);
        setValue('title', product.title)
        setValue('description', product.description)
        setValue('price', product.price)
        setValue('thumbnail', product.thumbnail)
        setValue('code', product.code)
        setValue('stock', product.stock)
      }
    }
    loadProduct()
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateProduct(params.id, data);
    } else {
      createProduct(data);
    }

    navigate('/products')
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

        <h1>Add Product</h1>

        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="description">Description</label>
          <textarea rows="3" placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>

          <label htmlFor="price">Price</label>
          <input type="number" placeholder="Price"
            {...register("price")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="thumbnail">Thumbnail</label>
          <input type="text" placeholder="Thumbnail"
            {...register("thumbnail")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="code">Code</label>
          <input type="number" placeholder="Code"
            {...register("code")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="stock">Stock</label>
          <input type="number" placeholder="Stock"
            {...register("stock")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="date">Date</label>
          <input type="date" {...register('date')}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />
          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
        </form>

      </div>
    </div>
  )
}

export default ProductFormPage