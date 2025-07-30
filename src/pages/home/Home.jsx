import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../product/Products';
import AddProduct from '../product/AddProduct';

function Home() {
 
    const products = useSelector((state) => state.products);
    console.log(products)

  return (
    <div className='py-8 '>
     <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='col-span-2'>
           <div className='grid grid-cols-2 gap-4 gap-y-8'>
            {
                products.length ? products.map((product, index) => (
                   <Products key ={index} product={product}/>
                )) : <p>No product Found!</p>
            }
           </div>
        </div>
        <div><AddProduct></AddProduct></div>
     </div>

    </div>
  )
}

export default Home