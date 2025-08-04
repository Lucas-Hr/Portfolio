'use client'
import Link from 'next/link';
import { Github, Facebook, Linkedin} from 'lucide-react';
import React from 'react'
import Image from 'next/image'
import contactData from '@/data/ContactData'
import socialData from '@/data/SocialData'
const Contact = () => {
  return (
    <div className='bg-[#060606] px-10 md:px-30 py-20' id='contact'>
        <h2 className='text-lg  md:text-2xl text-[#2AD883] font-bold'>Contact me</h2>
        <div className='flex flex-col justify-between'>
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
            <div className='mt-8 flex '>
            {/* {socialData.map((s, index) => {
                return(
                    <div className='flex items-center me-4' key={index}>
                        <Image src={s.imageUrl} width={25} height={25} alt='icon'/>
                    </div>
                )
            })} */}
                <Link href='https://github.com/Lucas-Hr' target='_blank'>
                    <Github className='text-[#2AD883] cursor-pointer' />
                </Link>
                <Link href='https://www.linkedin.com/in/lucas-henintsoa-randriamiarisoa-a95012289/' target='_blank'>
                    <Linkedin className='text-[#2AD883] cursor-pointer ms-8' />
                </Link>
                <Link href='https://web.facebook.com/lukass.entsu' target='_blank'>
                    <Facebook className='text-[#2AD883] cursor-pointer ms-8' />
                </Link> 
            </div>
        </div>
        
    </div>
  )
}

export default Contact