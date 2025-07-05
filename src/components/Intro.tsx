import React from 'react'
import Image from 'next/image'

function Intro() {
  return (
    <div className='flex items-center justify-between bg-[#171C22] px-52 py-20 h-screen'>
        <div className='w-1/2'>
            <h1 className='text-white text-bold text-4xl'>
               I’m <span className='font-bold'>
                    <span className='text-[#2AD883]'>Lucas</span> Henintsoa Randriamiarisoa
                  </span>, <br />
                a <span className='text-[#2AD883] font-bold'>Fullstack JavaScript Developer</span> 
            </h1>
            <h2 className='text-[#767572] font-[100] mt-2'>
                I design website user interface for you and turn them into website <br /> using <span className='text-[#2AD883]'>JavaScript </span>language and its framework.
            </h2>
        </div>
        <div className='w-1/2'>
          <Image 
            src="/imageIntro.svg"
            width={400}
            height={400}
            alt='Me'
          />
        </div>
    </div>
  )
}

export default Intro