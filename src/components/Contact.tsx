'use client'
import Link from 'next/link';
import { Github, Facebook, Linkedin} from 'lucide-react';
import React from 'react'
import Image from 'next/image'
import contactData from '@/data/ContactData'
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <div className='bg-[#060606] px-10 md:px-30 py-20' id='contact'>
        <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-lg  md:text-2xl text-[#2AD883] font-bold'>Contact me</motion.h2>
        <div className='flex flex-col justify-between'>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y : 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-4'>
            {contactData.map((c, index) => {
                return(
                    <div className='flex items-center mt-4' key={index}>
                        <Image src={c.imageUrl} width={20} height={20} alt='icon'/>
                        <p className='ms-2 text-white'>{c.title}</p>
                    </div>
                )
            })}
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className='mt-8 flex '
            >
                <Link href='https://github.com/Lucas-Hr' target='_blank'>
                    <Github className='text-[#2AD883] cursor-pointer' />
                </Link>
                <Link href='https://www.linkedin.com/in/lucas-henintsoa-randriamiarisoa-a95012289/' target='_blank'>
                    <Linkedin className='text-[#2AD883] cursor-pointer ms-8' />
                </Link>
                <Link href='https://web.facebook.com/lukass.entsu' target='_blank'>
                    <Facebook className='text-[#2AD883] cursor-pointer ms-8' />
                </Link> 
            </motion.div>
        </div>
        
    </div>
  )
}

export default Contact