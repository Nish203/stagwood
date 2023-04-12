
import React, { useState,  useEffect } from 'react'
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
    <div class="bg-[url('./images/back.jpg')] bg-cover " >
        
      
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
    <Bnav/>
    <Footer/>
    </div>
   )
}  


export default Home
