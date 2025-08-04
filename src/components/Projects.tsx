'use client'
import CardProjects from './CardProjects'
import projectsData from '@/data/ProjectsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
function Projects() {
    return (
    <div className=' bg-[#171C22] px-10 md:px-30 py-20 ' id='projects'>
        <h2 className='text-lg md:text-2xl text-[#2AD883] font-bold text-center'>Projects</h2>
             <Swiper
                spaceBetween={30}
                slidesPerView={1}
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
