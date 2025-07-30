import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/carts/cartSlice'

function Products({product}) {
  const{id, name, image, price, category,date}=product || {}
    // console.log(product)

    const dispatch = useDispatch()

    const handaleAddToCart =()=>{
      dispatch(addToCart (product))
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"
      className='w-full h-48 object-cover'
       />
      
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end items-center">
      <p className='text-xl font-semibold'>{price}</p>
      <button onClick={handaleAddToCart} className="btn btn-primary bg-indigo-500 text-white">Add to cart</button>
    </div>
  </div>
</div>
  )
}

export default Products