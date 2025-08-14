'use client'
import React from 'react'
type ExperienceProps = {
    title : string,
    entreprise : string,
    date : string,
    description : string | null,
    technologies : string[] | null,
}

const CardExperience = ({title, entreprise, date, description, technologies} : ExperienceProps) => {
  return (
    <div className='px-12 py-6 bg-[#20272F] cursor-pointer text-white rounded-md mt-4 md:mx-4 transition-colors duration-300 ease-in-out'>
        <h3 className='font-bold text-md text-white'>{title}</h3>
        <p className='text-[#686868] text-md mt-1 '>{entreprise} | {date}</p>
        <p className='text-[#686868] text-sm mt-2 '>{description}</p>
        <div className='flex items-center mt-4 flex-wrap justify-between'>
             {
                technologies?.map((tech , index) => {
                    return (
                        <p key={index} className='text-[#2AD883] text-[12px] m-2 rounded-xl bg-[#34614B] py-1 px-2 text-center '>{tech}</p>
                    )      
                })
            }
        </div>
       
        
     </div>
  )
}

export default CardExperience