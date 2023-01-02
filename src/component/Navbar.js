
import React, { useState } from 'react'
import {IoLocationOutline,IoPersonOutline,IoStorefrontOutline,IoBagHandleOutline,IoHeartOutline,IoSearchOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'

import Explore from './Explore'
import Newitems from './Newitems'
import Trending from './Trending'
import Help from './Help'
import Reviewslide from './Reviewslide'
import Bnav from './Bnav'
import Footer from './Footer'



// import ship from '../images/24-hours-support.png'
// import secure from '../images/credit-card.png'
// import exchange from '../images/delivery-status.png'

   
const Navbar = () => {
    const [open, setOpen] = useState(false);
   

  return (
   
<div className='w-full '>
    <div class="bg-[url('./images/back.jpg')] bg-cover ">
         <div className='flex justify-between items-center px-4   text-black bg-gray-400/50 '>
           
           <div className='flex font-bold '>
                <h1 className='text-2xl  '> STAGWOOD </h1>
            </div>

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
         </div> 
 
       <div className=' h-16 flex  font-medium justify-around bg-gray-400/50 text-black sticky top-0 z-50 '>
            <div className='z-50   md:w-auto w-full  flex justify-between'>
               
                <div className='text-3xl md:hidden ml-96' onClick={() => setOpen(!open)}>
                    <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className='md:flex hidden uppercase gap-3  '>
                <li >
                    <Link  to="/" className='py-8 px-3 inline-block'> Home </Link>
                </li>
                <Navlinks/>
                <li >
                    <Link  to="/" className='py-8 px-3 inline-block'> Browse all </Link>
                </li>
            </ul>
             <div className=' py-8 gap-2 hidden sm:flex justify-between'>
                <Link>
                    <IoSearchOutline size={27} className=' mr-2  '/>
                </Link>
                <Link>
                    <IoPersonOutline size={24} className='mr-2 '/>
                </Link>
                <Link>
                    <IoHeartOutline size={27} className='mr-2'/>
                </Link>
                <Link>
                    <IoBagHandleOutline size={25} className='mr-2'/>
                </Link> 
            </div>
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
       
        <div className='px-8 pb-40 pt-14  mx-auto max-w-6xl '>
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

    </div> 
    <Explore/>
    <Newitems/>
    <Trending/>
   

    {/* <div className="2xl:container 2xl:mx-auto md:py-20 py-12">
            <div className="  bg-gradient-to-b from-[#fae2c2] to-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">

                <div>
                    <img src={ship} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 "> CUSTOMER SUPPORT </h3>
                    <p className=" text-base leading-6 font-normal text-gray-700 mt-4 lg:w-full md:w-9/12 w-full">
                        Our customer care is available 24/7 at <span className=" font-semibold cursor-pointer">+495-589-509</span> and <span className=" font-semibold cursor-pointer">customercare@gmail.com</span>
                    </p>
                </div>

                <div>
                    <img src={secure} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">SECURE PAYMENTS </h3>
                    <p className=" text-base leading-6 font-normal text-gray-700 mt-4 lg:w-full md:w-9/12 w-full">All out products are 100 percent recycable</p>
                </div>

                <div>
                     <img src={exchange} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">SIMPLE RETUENS </h3>
                    <p className=" text-base leading-6 font-normal text-gray-700 mt-4 lg:w-full md:w-9/12 w-full">If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
                </div>
            </div>
        </div> */}

    <Help/>
    <Reviewslide/>

    <Bnav/>
    <Footer/>
    
    
   
    </div>
   
     
     
    
  )
}

export default Navbar
