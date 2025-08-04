import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Intro() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#171C22] py-20 md:px-30 px-10 md:h-screen'>
        <div className='md:w-1/2'>
            <h1 className='text-white text-center text-bold text-lg md:text-2xl md:text-left'>
               I’m <span className='font-bold'>
                    <span className='text-[#2AD883]'>Lucas</span> Henintsoa Randriamiarisoa
                  </span>, <br />
                a <span className='text-[#2AD883] font-bold'>Fullstack JavaScript Developer</span> 
            </h1>
            <h2 className='text-[#767572] text-sm text-center md:text-left mt-2'>
                I design website user interface for you and turn them into website <br /> using <span className='text-[#2AD883]'>JavaScript </span>language and its framework.
            </h2>
            <div className='flex items-center justify-evenly mt-6 md:justify-start'>
              <button className='text-sm bg-[#2AD883] text-black py-2 px-4 rounded-md cursor-pointer hover:bg-[#1f9b6c] transition-colors'>Hire me!</button>
              <Link href="/#projects">
                <button className=' text-sm border border-[#2AD883] text-[#2AD883] px-4 py-2 rounded-md cursor-pointer md:ms-2'>See my projects</button>
              </Link>
              
            </div>
        </div>
        <div className='md:w-1/2 mt-10'>
          <Image 
            src="/photo.svg"
            width={400}
            height={400}
            alt='Me'
            
          />
        </div>
    </div>
  )
}

export default Intro