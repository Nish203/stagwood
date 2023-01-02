import React from 'react'
import img1 from '../images/reg.webp'
import {VscEye} from 'react-icons/vsc'

function Register1() {
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#7f5539]">Register</h2>
      <p class="text-xs mt-4 text-[#7f5539]">Welcome..! Enter your Detail</p>

      <form action="" class="flex flex-col gap-4">
      <input class="p-2 mt-8 rounded-xl border" type="Username" name="Username" placeholder="Username"/>
        <input class="p-2  mt-1 rounded-xl border" type="email" name="email" placeholder="Email"/>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/> 
         
          <VscEye class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" />
          
        </div>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="password" name="Cpassword" placeholder="Confirm Password"/>
          
          <VscEye class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"/>
          
        </div>
        <button class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
      </form>

    


      <div class="mt-3 text-xs flex justify-between items-center text-[#7f5539]">
        <p>Already have an account?</p>
        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
      </div>
    </div>

    
    <div class="md:block hidden w-1/2">
    <img src={img1}></img>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register1