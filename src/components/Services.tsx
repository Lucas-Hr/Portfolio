import React from 'react'
import CardServices from './CardServices'
function Services() {
  return (
    <div className='px-52 py-20 bg-[#171C22]'>
        <h2 className='text-3xl text-[#2AD883] font-bold text-center'>Services</h2>
        <div className='flex justify-evenly my-10'>
            <CardServices image='' title="UI/UX Design" description="Define, Research, Analysis & Planning,Design, Prototyping, Testing"/>
            <CardServices image='' title="Web Development" description="Gathering Relevant Information, Planning - Sitemap and Wireframe, Design & Layout, Content 
            Creation, Development, Testing, Review, and Launch, Maintenance and Updation"/>
        </div>
    </div>
  )
}

export default Services