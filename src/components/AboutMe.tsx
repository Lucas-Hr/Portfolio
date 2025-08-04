'use client'

import React from 'react'
import Image from 'next/image'

function AboutMe() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV - Randriamiarisoa Henintsoa Lucas.pdf'; // Path to your CV file
    link.download = 'CV_-_Randriamiarisoa_Henintsoa_Lucas.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-[#20272F] md:px-30 px-10 py-20 ' id='about'>
        <div className='md:w-1/2'>
            <Image
                src="/about.png"
                alt="Me"
                width={300}
                height={300}
            />
        </div>
        <div className='md:w-1/2'>
            <h2 className='md:text-2xl text-xl text-center text-[#2AD883] font-bold md:text-left mt-4 md:mt-0'>About me</h2>
            <div className='mt-2'>
                <h3 className='text-md text-white font-bold md:text-lg'>Who am I?</h3>
                <p className='text-[#686868] text-sm md:text-base text-justify'>
                  I’m currently an IT Student at “Institut Superieur Polytechnique de Madagascar” studying all the field in computer science
                   like web development, advanced algorithm, artificial intelligence and electronic adding math to all of that.I’m
                    more focused on developing website because I found my passion there sp I’ve already built some website with my
                     teammates for academic projects at school and built personal projects too that prove my passion in this field.
                </p>
            </div>
            <div className='mt-6'>
                <h3 className='text-md text-white font-bold md:text-lg'>What I do?</h3>
                <p className='text-[#686868] text-sm md:text-base text-justify'>
                  So I design User Interface and User Experience and then turn them
                   into website using JavaScript language especially in React and Express framework.
                </p>
            </div>
            <button className='text-sm bg-[#2AD883] text-black px-4 py-2 rounded-md cursor-pointer mt-4 flex items-center hover:bg-[#1f9b6c] transition-colors' onClick={() => downloadCV()}>
              <Image src='/download.svg' alt='downloadCV' width={20} height={20}/>
              <span className='ms-2 '>Download my CV</span>
            </button>
        </div>
    </div>
  )
}

export default AboutMe