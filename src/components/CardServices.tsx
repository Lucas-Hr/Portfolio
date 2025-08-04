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
    <div className='px-12 py-6 bg-[#20272F] cursor-pointer text-white rounded-md mt-4 md:mx-4 transition-colors duration-300 ease-in-out'>
        <div className='flex items-center'>
            <Image
                src={image}
                alt=''
                width={30}
                height={30}
            />
            <h3 className='font-bold ms-2 text-md'>{title}</h3>
        </div>
        <p className='text-[#686868] text-sm mt-2 '>{description}</p>
    </div>
  )
}

export default CardServices