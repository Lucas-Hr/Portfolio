import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type CardServicesProps= {
    image : string | StaticImport,
    title : string | null,
    description : string | null,
}

function CardServices({image, title, description } : CardServicesProps) {
  return (
    <div className='px-12 py-6 bg-[#20272F] hover:bg-[#2AD883] text-white mx-10 rounded-md'>
        <div className='flex items-center'>
            <Image
                src={image}
                alt=''
                width={40}
                height={40}
            />
            <h3 className='font-bold ms-2'>{title}</h3>
        </div>
        <p className='text-[#686868] font-thin'>{description}</p>
    </div>
  )
}

export default CardServices