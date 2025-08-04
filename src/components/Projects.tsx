'use client'
import React, { useEffect, useState } from 'react'
import CardProjects from './CardProjects'
import projectsData from '@/data/ProjectsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import {motion} from 'framer-motion'
function Projects() {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    // Function to update the device width
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Set initial width when component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
    <div className=' bg-[#171C22] px-10 md:px-30 py-20 ' id='projects'>
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}   
            className='text-lg md:text-2xl text-[#2AD883] font-bold text-center'>Projects</motion.h2>
            <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Swiper
                spaceBetween={30}
                slidesPerView={deviceWidth < 1280 ? 1 : 3}
                className="mySwiper mt-10 cursor-grab"
                loop={true}
                >
                  {
                      projectsData.map((project, index) => (
                          <SwiperSlide key={index}>
                              <CardProjects
                                  imageUrl={project.imageUrl}
                                  title={project.title}
                                  description={project.description}
                                  link={project.link}
                                  stack={project.stack}
                              />
                          </SwiperSlide>
                      ))
                  }
                 </Swiper>
            </motion.div>
             
    </div>
  )
}
export default Projects

// Add this CSS to your global CSS file or in a <style jsx global> block if using Next.js
/*
.custom-swiper-pagination {
  --swiper-pagination-color: #00FF00;
}
*/
