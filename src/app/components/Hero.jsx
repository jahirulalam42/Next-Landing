import Image from 'next/image'
import React from 'react'
import { TfiTwitter } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiBasketballLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='min-h-fit'>
      <div className=" text-white flex justify-center pt-28">
  <div className="text-center">
    <div className="max-w-xl">
      <h1 className="text-6xl font-bold">Minimize your tabs.</h1>
      <h1 className="text-6xl font-bold">Find the trends!</h1>
      <p className="py-6 mb-8 text-gray-400">
      Don’t let your computer memories consumes all of those browser tabs.<br /> 
      Findtrend  let you gathers all of your favorite website into one place.
      </p>
      <button type="button" className="btn px-8 py-3 w-40 font-semibold border-none rounded-full bg-custom-yellow text-black text-md">Get Started🔥</button>
      <div className='absolute top-[420px] right-[760px]'>
      <Image
      src={`/img-hero.png`}
      width={100}
      height={100}
      alt="Picture of the author"
    />
      </div>
    </div>

   
  </div>
</div>

<div className='flex justify-center h-96'>
<div className='relative mt-32 w-1/2 h-96 font-extralight'>

    <div className='absolute top-0 left-0 w-72 h-16 bg-[#181818]  text-white flex justify-center items-center -rotate-6 hover:rotate-6 hover:transition hover:scale-110 duration-300 z-30 shadow-2xl'><span className='text-2xl px-4'><TfiTwitter /></span> Cryptopunk - Search</div>
      
    <div className='absolute top-10 left-56  w-72 h-16 bg-[#181818]  text-white flex justify-center items-center rotate-3 hover:-rotate-3 hover:transition hover:scale-110 duration-300 shadow-2xl z-20'><span className='text-2xl px-4'><FaPinterest /></span>Popular Design - Search </div>


    <div className='absolute top-0 right-56 w-72 h-16 bg-[#181818] text-white flex justify-center items-center -rotate-6 hover:rotate-6 hover:transition hover:scale-110 duration-300 z-10 shadow-2xl '><span className='text-2xl px-4'><FaFacebook /></span>Product Design - Search</div>



    <div className='absolute top-10 right-0   w-72 h-16 bg-[#181818]  text-white flex justify-center items-center rotate-3 hover:-rotate-3 hover:transition  hover:scale-110 duration-300 z-0 shadow-2xl'><span className='text-2xl px-4'><RiBasketballLine /></span>Elon Musk - Search</div>
    
    </div>
</div>
    </div>
  )
}

export default Hero


