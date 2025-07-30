import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/features/products/productSlice'



function AddProduct() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispatch= useDispatch()
  const onSubmit = (data) => {
       dispatch(addProduct(data))
  }

  return (
    <div className='max-w-md mx-auto bg-white shadow-lg p-6'>
        <h2 className='text-xl font-semibold mb-4 '>AddProduct</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
                <label className=' text-sm font-medium block text-gray-600'>Prduct Name</label>
                <input type="text" name='name' id='name' {...register("name", { required: true })}placeholder='Product 1' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            <div>
                  <label className=' text-sm font-medium block text-gray-600'>Category</label>
                   <select name="category" id="category" {...register("category", { required: true })}className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500'>
                    <option value="">Choose a category</option>
                    <option value="fashion">fashion</option>
                    <option value="Gadgets">Gadgets</option>
                    <option value="bags">bags</option>
                    <option value="Electronics">Electronics</option>
                   </select>
            </div>

            <div>
                  <label className=' text-sm font-medium block text-gray-600'>Image Url:</label>
                <input type="text" name='image' id='image' {...register("image", { required: true })}placeholder='https://' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>

            <div className='grid grid-cols-2 gap-4'>
                 <div>
                  <label className=' text-sm font-medium block text-gray-600'>Price:</label>
                <input type="number" name='price' id='price'  {...register("price", { required: true })}placeholder='100' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>

              <div>
                  <label className=' text-sm font-medium block text-gray-600'>Price:</label>
                <input type="date" name='date' id='date'  {...register("date", { required: true })}className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>

            </div>

            <button type='submit' className='btn btn-primary bg-indigo-500 w-full '>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct