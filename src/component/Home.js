
import React, { useState,  useEffect } from 'react'
import {IoLocationOutline,IoPersonOutline,IoStorefrontOutline,IoBagHandleOutline,IoHeartOutline,IoSearchOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Navlinks from './Navlinks'

import Explore from './Explore'
import Newitems from './Newitems'
import Trending from './Trending'
import Help from './Help'
import Reviewslide from './Reviewslide'
import Bnav from './Bnav'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// import ship from '../images/24-hours-support.png'
//  import secure from '../images/credit-card.png'
//  import exchange from '../images/delivery-status.png'
   
const Home = () => {

    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        console.log(token);
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        // console.log(data);
        if (data.status == 401 || !data) {
            toast.error("Invalid Details", {
                position: "top-center"
            });
            console.log("Error page")
        } else {
            console.log("user verify");
            // setLoginData(data)
            history("/home");
        }
    }


    useEffect(() => {
        // setTimeout(() => {
        //     DashboardValid();
        //     setData(true)
        // }, 2000)
        DashboardValid();
    }, [])

  return (
<div className='w-full '>
<Navbar/>
    <div class="bg-[url('./images/back.jpg')] bg-cover ">
        
      
        <div className='px-8 pb-40 pt-24  mx-auto max-w-6xl '>
            <div className='flex'>
            <div className=' pr-8 w-1/2 pt-9 md:p-8 text-center md:text-left space-y-4'>
                <h3 className=' mb-6 text-6xl font-bold text-black font-display'> 
                    We provide our best product 
                </h3>
                <a className='pt-8  max-w-md text-xl leading-relaxed text-black'>
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
    <Help/>
    <Reviewslide/>

     {/* <div className="2xl:container 2xl:mx-auto md:py-20 ">
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
        </div>  */}

    <Bnav/>
    <Footer/>
    </div>
   )
}  


export default Home
