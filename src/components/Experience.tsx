'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { LangContext } from '@/context/LangContext';
import { useContext } from 'react';
import CardExperience from './CardExperience';
import experienceData from '@/data/ExperienceData'

const Experience = () => {
  const { lang } = useContext(LangContext)
  return (
    <div className='md:px-30 py-20 bg-[#171C22] px-10' id='experience'>
        <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-xl md:text-2xl text-[#2AD883] font-bold text-center'>
        {lang === 'english' ? 'Work experience' : 'Expériences professionelles'}
        </motion.h2>

         <motion.div        
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex flex-col md:flex-row mt-10'
            >
              
                  {
                      experienceData.map((experience, index) => (
                          <div key={index}>
                              <CardExperience
                                  title={lang === 'english' ? experience.titleEnglish : experience.titleFrench}
                                  entreprise={experience.entreprise}
                                  date={lang === 'english' ? experience.dateEnglish : experience.dateFrench}
                                  description={lang === 'english' ? experience?.descriptionEnglish : experience?.descriptionFrench}
                                  technologies={experience?.technologies}
                              />
                          </div>
                      ))
                  }
            </motion.div>
    </div>
  )
}

export default Experience