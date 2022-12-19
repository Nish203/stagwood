
import React, { Component, useState } from 'react'


import {IoLocationOutline,IoPersonOutline,IoStorefrontOutline,IoBagHandleOutline,IoHeartOutline,IoSearchOutline} from 'react-icons/io5'

import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'
import Categories from './Categories'
import Carosal from './Carosal'
import Register from './Register.js'

import Highlight from './Highlight'
import Footer from './Footer'

import ship from '../images/24-hours-support.png'
import secure from '../images/credit-card.png'
import exchange from '../images/delivery-status.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='w-full min-h-screen ' >

    <div  class="bg-[url('images/bg3.jpg')] bg-cover bg-amber-50/20">
        <div className='flex justify-between items-center px-4 py-2  '>
           
            <div className='flex'>
               
                <div className='hidden md:flex items-center px-4'>
                    <Link>
                        <IoStorefrontOutline size={25} className='mr-2 '/>
                    </Link>
                    <p> Find a store </p>
                </div>
                <div className='hidden md:flex items-center px-4'>
                    <Link>
                        <IoLocationOutline size={27} className='mr-2'/>
                    </Link>
                    <p> Track order </p>
                </div>
            </div>

            <div className='flex md:cursor-pointer '>
                <h1 className='text-3xl font-bold '> STAGWOOD </h1>
            </div>

            <div className='flex'>
                <div className=' sm:flex items-center px-3'>
                    <Link>
                        <IoPersonOutline size={24} className='mr-2 '/>
                    </Link>
                    <p className=''>  Sign in </p>
                </div>
                <div className='sm:flex items-center px-3'>
                    <Link>
                        <IoHeartOutline size={27} className='mr-2'/>
                    </Link>
                    <p className=''> Wishlist </p>
                </div>
                <div className='sm:flex items-center px-3'>
                    <Link>
                        <IoBagHandleOutline size={25} className='mr-2'/>
                    </Link> 
                    <p className=''> Bag </p>
                </div>
            </div>
        </div>
    
    <div className='  h-10 '>
      <div className='w-full  flex justify-between items-center absolute z-10   '> 

      <div className='z-50   md:w-auto w-full  flex justify-between'>
            <div className='text-3xl md:hidden py-5 px-5 ml-96' onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
        </div>

      <ul className=' hidden sm:flex ml-36 text-black gap-3'>
            <li > 
                <Link  to="/" className='py-8 px-3 inline-block'> Home </Link>
            </li>
            <Navlinks/>
            <li >
                <Link  to="/" className='py-8 px-3 inline-block'> About us </Link>
            </li>
        </ul>

        <div className=' hidden sm:flex justify-between'>
            <Link>
                <IoSearchOutline size={27} className=' mr-2  '/>
            </Link>
            <p className='mr-10 mt-1 '>  Search </p>
            
        </div>

        {/*mobile menu */}
      
        <ul className={`md:hidden absolute w-full h-full bottom-0 py-20 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
       
            <li className='py-7 px-3 inline-block '>
                <Link  to="/" > Home </Link>
            </li>
            <Navlinks/>
            <li className=' py-7 px-3 inline-block'>
                <Link  to="/" > About us </Link>
            </li>
        </ul>
        
        

      </div>
      </div> 
    

      <div className='px-8 pb-12 mt-10 mx-auto max-w-5xl '>
        <div className='flex'>
            <div className='pt-24 pr-8 w-1/2'>
                <h3 className=' mb-6 text-6xl font-bold font-display '> 
                    We provide our best product 
                </h3>
                <a className='pt-8  max-w-md text-xl leading-relaxed text-gray-800'>
                     Stagwood is site that allows you to buy and sell products and services online.
                </a>
                <div className='flex items-center pt-12 space-x-6 text-[var(--primary)]'>
                    <button className='flex justify-center items-center py-4 px-8 fond-bold tarcking-wide leading-7 text-white bg-[var(--primary)] rounded-xl hover:shadow-xl '> Explore Now </button>
                </div>
                
            </div>
        </div>
      </div>

      <div className='bg-grey-50 '>
        <div className='py-12 px-6 mx-auto max-w-6xl '>
            <div className='flex flex-col gap-5 md:flex-row'>
                <div  className='flex  flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                    <div class="">
                    <div className='flex '>
                            <img src={ship} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl text-black ml-5 mt-2">  CUSTOMER SUPPORT  </h2>
                    </div>
                        <p class="text-sm leading-relaxed text-black mr-3 ml-2 mt-2"> Our customer care is available 24/7 at +495-589-509 and customercare@gmail.com  </p>
                    </div>
                    
                </div>

                <div className='flex flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                    <div class="relative">
                        <div className='flex '>
                            <img src={secure} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl ml-5 mt-2"> SECURE PAYMENTS  </h2>
                        </div>
                         <p class="text-sm leading-relaxed text-black mr-3 ml-2 mt-2"> Transaction process has end to end encryption. fgbfhghntggnjtthjhkllnjvjt </p>
                    </div>
                    
                </div>

                <div  className='flex  flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                 <div class="relative">
                    <div className='flex '>
                            <img src={exchange} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl ml-5 mt-2"> SIMPLE RETUENS  </h2>
                        </div>
                        <p class="text-sm leading-relaxed text-black mr-3 ml-2 mt-2">if you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
                    </div>
                    
                </div>
                
            </div>
        </div> 
    </div> 
      
      </div> 
     
    

     
    <Categories/>
    <Carosal/>
   <Register/>
   
    <Footer/>
    
    
    </div>      
  )
}

export default Navbar
