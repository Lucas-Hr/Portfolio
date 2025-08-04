'use client'

import React from 'react'
import tools from '@/data/ToolsData'
import Image from 'next/image'
import { motion } from 'framer-motion'
function Tools() {
  return (
    <div className='bg-[#20272F] md:px-30 px-10 py-20 h-1/2' id='tools'>
        <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
        className='text-lg md:text-2xl text-[#2AD883] font-bold text-center'>Tools
        </motion.h2>
        <div       
        className='mt-2 flex flex-col'>
            {tools.map((tool,index) => {
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 ,delay: 0.5}}  
                        key={index} 
                        className='flex flex-wrap rounded-sm md:px-10 md:py-2 bg-[#171C22] md:grow m-4'>
                        
                        {tool.items.map((item, idx) => {
                            return (
                                <div className='flex flex-col grow items-center p-2 m-2 rounded' key={idx}>
                                    <Image src={item.icon} alt={item.name} width={20} height={20} />
                                    <p className='text-sm text-white font-lighter mt-2 ms-2'>{item.name}</p>
                                </div>
                            )})
                        }
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default Tools