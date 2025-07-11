import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
    link : string;
    stack : string;
}

function CardProjects({imageUrl, title, description, link, stack}: CardProps) {
  return (
    <div>
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className='w-full h-64 object-cover rounded-lg'
        />
        <div className='bg-[#20272F] p-4 rounded-lg h-72'>
            <h3 className="text-lg font-semibold mt-2 text-white">{title}</h3>
            <p className="mt-1 text-[#686868] text-sm">{description}</p>
            <p className="mt-1 text-white text-sm">Technology : {stack}</p>
            <Link href={link} className="bg-[#2AD883] p-2 mt-3 inline-block rounded hover:bg-[#1f9b6c] transition-colors ">

              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon" width={25} height={25} /> 

            </Link>
        </div>
    </div>
  )
}

export default CardProjects