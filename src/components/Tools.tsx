import React from 'react'
import tools from '@/data/ToolsData'
import Image from 'next/image'
function Tools() {
  return (
    <div className='bg-[#20272F] md:px-30 px-10 py-20 h-1/2' id='tools'>
        <h2 className='text-lg md:text-2xl text-[#2AD883] font-bold text-center'>Tools</h2>
        <div className='mt-2 flex flex-col'>
            {tools.map((tool,index) => {
                return (
                    <div key={index} className='flex flex-wrap rounded-sm md:px-10 md:py-2 bg-[#171C22] md:grow m-4'>
                        
                        {tool.items.map((item, idx) => {
                            return (
                                <div className='flex flex-col grow items-center p-2 m-2 rounded' key={idx}>
                                    <Image src={item.icon} alt={item.name} width={20} height={20} />
                                    <p className='text-sm text-white font-lighter mt-2 ms-2'>{item.name}</p>
                                </div>
                            )})
                        }
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Tools