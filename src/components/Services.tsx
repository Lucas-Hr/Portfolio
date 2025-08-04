'use client'

import React from 'react'
import CardServices from './CardServices'
import { motion } from 'framer-motion'
function Services() {
  return (
    <div className='md:px-30 py-20 bg-[#171C22] px-10' id='services'>
        <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-xl md:text-2xl text-[#2AD883] font-bold text-center'>Services</motion.h2>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-col md:flex-row justify-between my-10'>
            <CardServices image='/uiux.svg' title="UI/UX Design" description="Define, Research, Analysis & Planning,Design, Prototyping, Testing"/>
            <CardServices image='/dev.svg' title="Web Development" description="Gathering Relevant Information, Planning - Sitemap and Wireframe, Design & Layout, Content 
            Creation, Development, Testing, Review, and Launch, Maintenance and Updation" 
            />
        </motion.div>
    </div>
  )
}

export default Services