import React from 'react'
import tools from '@/data/ToolsData'
import Image from 'next/image'
function Tools() {
  return (
    <div className='bg-[#20272F] px-52 py-20 h-1/2' id='tools'>
        <h2 className='text-3xl text-[#2AD883] font-bold text-center'>Tools</h2>
        <div className='mt-2 flex justify-between'>
            {tools.map((tool,index) => {
                return (
                    <div key={index} className=' rounded-sm px-10 py-2 bg-[#171C22] mt-4 w-auto'>
                        <h3 className='text-white font-bold text-xl mt-8 '>{tool.name}</h3>
                        {tool.items.map((item, idx) => {
                            return (
                                <div className='flex items-center my-6' key={idx}>
                                    <Image src={item.icon} alt={item.name} width={30} height={30} />
                                    <p className=' text-white font-lighter mt-2 ms-2'>{item.name}</p>
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