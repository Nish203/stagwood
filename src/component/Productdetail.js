import React, { useState } from 'react'

import img1 from '../images/website/chair/chair__5.webp'
import {BsHandbagFill, BsFillSuitHeartFill} from 'react-icons/bs'

function Productdetail() {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<20)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  } 

  return (
    <div className=''>
     
    
    <div className=''>
    <div className="container  overflow-hidden md:grid grid-cols-2  mt-16 ml-16">
{/* product image */}
        <div>
             <img src={img1} className='w-auto h-auto'></img><br />
        </div>    
        
    {/* product content */}
 
    <div className=''>
<h2 className='text-3xl font-medium uppercase flex items-center mb-4'> Product Name </h2>
<div className='space-y-2'>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span> Availability:</span>
  <span className='text-green-600'> In Stock</span>
</p>

<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Category:</span>
  <span className='text-gray-600'> Sofa</span>
</p>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Material:</span>
  <span className='text-gray-600'> Teak wood </span>
</p>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Size :</span>
  <span className='text-gray-600'> 24 x 11 x 21 inch</span>
</p>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Ship by:</span>
  <span className='text-gray-600'> 5 to 8 Day </span>
</p>
</div>
<div className='sm flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
  <p className='text-2xl text-primary font-semibold'>₹ 35000</p>
  <p className='text-base text-gray-400 line-through'>₹ 40000</p>
</div>
  <p className='mt-4 text-gray-600 mr-6 text-left'>
  The frame of a sofa is made most often wood, though newer options include
  steel, plastic, and laminated boards or a combination of the above
  </p>
     {/* quantity start */}
     <div className='mt-4 '>
     <span className='text-gray-800 font-semibold '> Quantity</span>
      <div className=' mt-5 flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
        <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
          
          <button type='button' onClick={decNum}>-</button>
         
         </div>
        <div className='h-8 w-9 text-base  items-center justify-center'>
          <input type="text" className='form-control h-8 w-9 items-center justify-center' value={num} onChange={handleChange} />
        </div>
        <div className='h-8 w-9 text-xl flex items-center justify-center cursor-pointer select-none'>
        <button type='button' onClick={incNum}>+</button>

        </div>
          
          </div>
          
          </div>
    
      {/* cart button */}
      <div className='flex gap-3 border-gray-200 pb-5 mt-6'>
        <a href="#" class="bg-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <i className='fas fa-shopping-bag'><BsHandbagFill/></i>Add to Cart
        </a>
        <a href="#" class="bg-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <i className='fas fa-heart'><BsFillSuitHeartFill/></i>Wishlist
        </a>

      </div>
      


    </div>
    </div>
  </div>
  
  
</div>

    
   
    
    
    
    
    
    
    
    
  
  )
}

export default Productdetail