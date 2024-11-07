import Image from 'next/image'
import React from 'react'

const HeroSecond = () => {
  return (
    <div className='bg-custom-yellow min-h-screen'>
      <h1 className='text-6xl text-center font-bold pt-56'>Open new tabs is Shanghatik! </h1>
      <div className='w-full flex justify-center py-20'>
        <div className='bg-white w-96 h-40 rounded-xl flex justify-center items-center'>
            <div className='bg-black h-16 text-white w-64 flex justify-center items-center btn hover:text-black'>
           <span className='pr-4'>
           <Image
      src={`/Vector.png`}
      width={40}
      height={40}
      alt="Picture of the author"
    />
           </span>
            Findtrend - Elon Musk
            </div>
        </div>
      </div>

      <div className='text-center text-lg'><span>
        </span> A solution for your browser tabs and don’t make your device get slower over time. Get <br /> ease and faster to discover a trend with just one tab.</div>
    </div>
  )
}

export default HeroSecond
