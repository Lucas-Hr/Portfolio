'use client'

import React from 'react'
import CardProjects from './CardProjects'
import projectsData from '@/data/ProjectsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
function Projects() {
  return (
    <div className=' bg-[#171C22] px-52 py-20 h-screen' id='projects'>
        <h2 className='text-3xl text-[#2AD883] font-bold text-center'>Projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          className="mySwiper mt-10 cursor-grab"
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
    </div>
  )
}

export default Projects