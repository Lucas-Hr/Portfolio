'use client'
import React, {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LangContext } from '@/context/LangContext'
type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
    link : string;
    stack : string;
}

function CardProjects({imageUrl, title, description, link, stack}: CardProps) {
  const {lang} = useContext(LangContext)
  return (
    <div className='h-full pb-12'>
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className='w-full h-64 object-cover'
        />
        <div className='bg-[#20272F] p-4  h-72 flex flex-col justify-between'>
          <div>
            <h3 className="text-md md:text-lg font-semibold mt-2 text-white">{title}</h3>
            <p className="mt-1 text-[#686868] text-sm">{description}</p>
            <p className="mt-2 text-white text-sm">{lang === 'english' ? 'Technology' : 'Technologie'} : {stack}</p>    
          </div>
            <Link href={link} className="bg-[#2AD883] p-2 mt-3 flex items-center rounded hover:bg-[#1f9b6c] transition-colors ">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon" width={25} height={25} />
              <p className='text-black ms-2 text-sm'>Github</p> 
            </Link>
        </div>
    </div>
  )
}

export default CardProjects