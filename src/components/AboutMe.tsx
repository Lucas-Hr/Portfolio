import React from 'react'
import Image from 'next/image'

function AboutMe() {
  return (
    <div className='flex justify-between items-center bg-[#20272F] px-52 py-20 h-screen' id='about'>
        <div className='w-1/2'>
            <Image
                src="/AboutMe.svg"
                alt="Me"
                width={300}
                height={300}
            />
        </div>
        <div className='w-1/2'>
            <h2 className='text-3xl text-[#2AD883] font-bold'>About me</h2>
            <div className='mt-2'>
                <h3 className='text-xl text-white font-bold'>Who am I?</h3>
                <p className='text-[#686868]'>
                  I’m currently an IT Student at “Institut Superieur Polytechnique de Madagascar” studying all the field in computer science
                   like web development, advanced algorithm, artificial intelligence and electronic adding math to all of that.I’m
                    more focused on developing website because I found my passion there sp I’ve already built some website with my
                     teammates for academic projects at school and built personal projects too that prove my passion in this field.
                </p>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl text-white font-bold'>What I do?</h3>
                <p className='text-[#686868]'>
                  So I design User Interface and User Experience and then turn them
                   into website using JavaScript language especially in React and Express framework.
                </p>
            </div>
            <button className='bg-[#2AD883] text-black px-8 py-2 rounded-md cursor-pointer mt-4 flex items-center hover:bg-[#1f9b6c] transition-colors'>
              <Image src='/download.svg' alt='downloadCV' width={20} height={20}/>
              <span className='ms-2 '>Download my CV</span>
            </button>
        </div>
    </div>
  )
}

export default AboutMe