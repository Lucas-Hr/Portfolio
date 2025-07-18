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
          className='w-full h-64 object-cover'
        />
        <div className='bg-[#20272F] p-4  h-72 flex flex-col justify-between'>
          <div>
            <h3 className="text-lg font-semibold mt-2 text-white">{title}</h3>
            <p className="mt-1 text-[#686868] text-sm">{description}</p>
            <p className="mt-1 text-white text-sm">Technology : {stack}</p>    
          </div>
            <Link href={link} className="bg-[#2AD883] p-2 mt-3 flex items-center rounded hover:bg-[#1f9b6c] transition-colors w-1/3">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon" width={25} height={25} />
              <p className='text-black ms-2'>Github</p> 
            </Link>
        </div>
    </div>
  )
}

export default CardProjects