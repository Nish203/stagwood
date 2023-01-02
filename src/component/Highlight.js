import React from "react";
import ship from '../images/24-hours-support.png'
import secure from '../images/credit-card.png'
import exchange from '../images/delivery-status.png'

const Highlight1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto md:py-9 py-9">
            <div className=" bg-gradient-to-b from-[#ba8c46] to-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
                {/* Delivery grid Card */}
                

                {/* customer Grid Card */}

                <div>
                    <img src={ship} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Customer Care</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                        Our customer care is available 24/7 at <span className=" font-semibold cursor-pointer">+495-589-509</span> and <span className=" font-semibold cursor-pointer">customercare@gmail.com</span>
                    </p>
                </div>

                {/* Recycle Grid Card */}

                <div>
                    <img src={exchange} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Recycle</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">if you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
                </div>

                {/* Secure Payment Card */}

                <div>
                    <img src={secure} className="h-9 w-9 "></img>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Secure Payment</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Transaction process has end to end encryption</p>
                </div>
            </div>
        </div>
    );
};

export default Highlight1;
