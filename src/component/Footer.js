import React from "react";
import {BsInstagram,BsTwitter,BsYoutube} from "react-icons/bs"
import {IoEarthOutline} from "react-icons/io5"
import {FaArrowRight} from "react-icons/fa"
const Footer1 = () => {
    return (
        <div className=" mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0">
                    <div className='flex font-bold '>
                        <h1 className='text-2xl  '> STAGWOOD </h1>
                    </div>
                    {/* <p className="text-sm leading-none text-gray-800 mt-4">Copyright © 2021 Luxe</p>
                    <p className="text-sm leading-none text-gray-800 mt-4">All rights reserved</p> */}
                    <div className="flex items-center gap-x-4 mt-12">
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-black cursor-pointer hover:bg-gray-800 rounded-full flex items-center justify-center">
                            <BsInstagram className="text-white"></BsInstagram>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-black cursor-pointer hover:bg-gray-800 rounded-full flex items-center justify-center">
                            <IoEarthOutline className="text-white"></IoEarthOutline>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-black cursor-pointer hover:bg-gray-800 rounded-full flex items-center justify-center">
                            <BsTwitter className="text-white"></BsTwitter>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-black cursor-pointer hover:bg-gray-800 rounded-full flex items-center justify-center">
                            <BsYoutube className="text-white"></BsYoutube>
                        </div>
                    </div>
                </div>
                <div className="sm:ml-0 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Home</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Shop</p>
                    
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Refund policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Shipping policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Terms of service</p>
                </div>
                <div className="mt-10 lg:block hidden">
                    <label className="text-xl font-medium leading-5 text-gray-800">Get updates</label>
                    <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
                        <input type="text" className="text-base leading-4 p-3 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your contact no" />
                        <FaArrowRight className="ml-3 mr-3"></FaArrowRight>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer1;
