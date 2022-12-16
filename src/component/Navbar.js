
import React, { Component, useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'
import Categories from './Categories'
import Carosal from './Carosal'
import Register from './Register.js'

import Highlight from './Highlight'
import Footer from './Footer'


import profile from '../images/user.png'
import wishlist from '../images/love.png'
import bag from '../images/bag.png'
import ship from '../images/24-hours-support.png'
import secure from '../images/credit-card.png'
import exchange from '../images/delivery-status.png'



const Navbar = () => {
    const [open, setOpen] = useState(false);
   

  return (
    <div className='w-full min-h-screen ' >
      <nav className=' shadow-xl h-24 '>
        <div className='flex items-center font-medium justify-around'>
            <div className='z-50   md:w-auto w-full  flex justify-between'>
                <img src={logo} className=' h-32 w-26 md:cursor-pointer  '></img>
                <div className='text-3xl md:hidden py-16 px-5' onClick={() => setOpen(!open)}>
                    <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
        <ul className='md:flex hidden uppercase item-center gap-4 font[sans-serif] '>
            <li >
                <Link  to="/" className='py-8 px-3 inline-block'> Home </Link>
            </li>
            <Navlinks/>
            <li >
                <Link  to="/" className='py-8 px-3 inline-block'> Browse all </Link>
            </li>
        </ul>
        
        <div className='flex items-center h-28 w-28 gap-6  md:h-34 w-34 '>

               
                <a href="Register.js" className="  ">
                    <img src={profile} ></img>
                </a>
                <a href="#" class=" ">
                    <img src={wishlist}></img>
                </a>
                <a href="#" class=" ">
                    <img src={bag}></img>
                </a>
        </div>
       

        {/* Mobile navbar */}
        <ul className={`md:hidden bg-slate-50 absolute w-full h-full bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
            <li >
                <Link  to="/" className='py-7 px-3 inline-block'> Home </Link>
            </li>
            <Navlinks/>
            <li >
                <Link  to="/" className='`py-12 px-3 inline-block p-8'> Browse all </Link>
            </li>
           
            
        </ul>
        </div>
      </nav>
      <div className='px-8 pb-12 mt-10 mx-auto max-w-6xl'>
        <div className='flex'>
            <div className='pt-24 pr-8 w-1/2'>
                <h3 className=' mb-6 text-6xl font-bold font-display'> 
                    We provide our best product 
                </h3>
                <a className='pt-8  max-w-md text-xl leading-relaxed text-gray-500'>
                     Stagwood is site that allows you to buy and sell products and services online.
                </a>
                <div className='flex items-center pt-12 space-x-6'>
                    <button className='flex justify-center items-center py-4 px-8 fond-bold tarcking-wide leading-7 text-white bg-black rounded-xl hover:shadow-xl '> Explore Now </button>
                </div>
                
            </div>
        </div>
      </div>

    <div className='bg-grey-50 bg-gradient-to-b from-[#ffedd5] to-white '>
        <div className='py-12 px-6 mx-auto max-w-6xl '>
            <div className='flex flex-col gap-5 md:flex-row'>
                <div  className='flex  flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                    <div class="">
                    <div className='flex '>
                            <img src={ship} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl ml-5 mt-2">  CUSTOMER SUPPORT  </h2>
                           
                        </div>
                        <p class="text-sm leading-relaxed text-gray-500 mr-3 ml-2 mt-2"> Our customer care is available 24/7 at +495-589-509 and customercare@gmail.com  </p>
                    </div>
                    
                </div>
                <div className='flex flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                    
                    <div class="relative">
                        <div className='flex '>
                            <img src={secure} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl ml-5 mt-2"> SECURE PAYMENTS  </h2>
                        </div>
                         <p class="text-sm leading-relaxed text-gray-500 mr-3 ml-2 mt-2"> Transaction process has end to end encryption. </p>
                    </div>
                    
                </div>
                <div  className='flex  flex-col p-8 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                    
                    <div class="relative">
                    <div className='flex '>
                            <img src={exchange} className="h-9 w-9 "></img>
                            <h2 class="relative text-xl ml-5 mt-2"> SIMPLE RETUENS  </h2>
                        </div>
                        <p class="text-sm leading-relaxed text-gray-500 mr-3 ml-2 mt-2">if you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
                    </div>
                    
                </div>
                
            </div>
        </div> 
    </div>
    <Categories/>
    <Carosal/>
   <Register/>
    <Highlight/>
    <Footer/>
    
    </div>      
  )
}

export default Navbar
