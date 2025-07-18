'use client'

import React from 'react'
import Image from 'next/image'
import contactData from '@/data/ContactData'
import socialData from '@/data/SocialData'
const Contact = () => {
  return (
    <div className='bg-[#060606] px-52 py-20' id='contact'>
        <h2 className='text-2xl text-[#2AD883] font-bold'>Contact me</h2>
        <div className='flex items-center justify-between'>
            <div className='mt-4'>
            {contactData.map((c, index) => {
                return(
                    <div className='flex items-center mt-4' key={index}>
                        <Image src={c.imageUrl} width={20} height={20} alt='icon'/>
                        <p className='ms-2 text-white'>{c.title}</p>
                    </div>
                )
            })}
            </div>
            <div className='mt-4'>
            {socialData.map((s, index) => {
                return(
                    <div className='flex items-center mt-4' key={index}>
                        <Image src={s.imageUrl} width={20} height={20} alt='icon'/>
                        <p className='ms-2 text-white'>{s.title}</p>
                    </div>
                )
            })}
            </div>
        </div>
        
    </div>
  )
}

export default Contact