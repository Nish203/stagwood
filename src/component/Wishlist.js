import React from 'react'
import { Link } from 'react-router-dom'
import { Slider, RangeSlider } from 'rsuite';
import {IoBagHandleOutline} from 'react-icons/io5'
import Product1Img from '../images/website/bench/bench__9.webp';
//import Product2Img from '../images/website/cabinate/cabinate__25.webp';
// import {AiOutlineHome} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import {IoSearchOutline,IoHeartOutline} from 'react-icons/io5'
function Wishlist() {
  return (
    <div>
       <div>
        <div className='container py-4 flex items-center gap-3 ml-3'>
        <div className='container sm:grid grid-cols-4 gap-3 pb-16  '>
        <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                    </div>      
                </div>
                    
              

                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                    </div>      
                </div>
            </div>

            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                    </div>      
                </div>
                    
              

                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                           
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                    </div>      
                </div>
            </div>

            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                    </div>      
                </div>
                    
                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                        
                    </div>      
                </div>
            </div>

           <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                    </div>      
                </div>
                    
                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                                <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <p>hyyy hello</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                        </div>
                        
                    </div>      
                </div>
            </div>

           
        </div>
            
        </div>    
    </div>
    </div>
  )
}

export default Wishlist

