import React from 'react'
import CardServices from './CardServices'
function Services() {
  return (
    <div className='px-52 py-20 bg-[#171C22]' id='services'>
        <h2 className='text-3xl text-[#2AD883] font-bold text-center'>Services</h2>
        <div className='flex justify-evenly my-10'>
            <CardServices image='/uiux.svg' title="UI/UX Design" description="Define, Research, Analysis & Planning,Design, Prototyping, Testing"/>
            <CardServices image='/webdev.svg' title="Web Development" description="Gathering Relevant Information, Planning - Sitemap and Wireframe, Design & Layout, Content 
            Creation, Development, Testing, Review, and Launch, Maintenance and Updation"/>
        </div>
    </div>
  )
}

export default Services