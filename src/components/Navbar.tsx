'use client'

import { Menu } from "lucide-react"
import Link from "next/link"
import links from "@/data/Link"
import { useState } from "react"
export default function Navbar () {
    const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
        {
                isVisible &&
                <div className="md:hidden h-full flex flex-col justify-center bg-[#171C22] absolute top-0 right-0 bottom-0 left-0 py-4 z-30 w-screen fixed">
                    <span className="text-white text-4xl right-10 absolute top-10 font-thin cursor-pointer" onClick={() => setIsVisible(false)}>&times;</span>
                    {
                        links.map((link,index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsVisible(false)}
                                    className="text-center text-[#767572] text-sm font-light transition duration-150 ease-in-out hover:text-white  hover:transition hover:ease-in-out hover:duration-150 my-3"
                                >
                                {link.name}
                            </Link>
                            )

                        })
                    }
                </div>
            }
        <div className="flex items-center w-screen fixed px-10 md:px-30 py-5 justify-between z-20 bg-[#171C22] ">
            <div className="text-[#2AD883] font-extrabold tracking-[10px] text-sm md:text-lg">
                LHR
            </div>
            
            
            <div className="flex items-center right-[80px] z-10 hidden md:flex">
                {
                    links.map((link,index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                
                                className="md:text-sm text-[#767572] font-light ms-2 md:px-2 lg:px-8 transition duration-150 ease-in-out hover:text-white  hover:transition hover:ease-in-out hover:duration-150 my-3 md:my-0" 
                            >
                            {link.name}
                        </Link>
                        )

                    })
                }
            </div>

            <div className="md:hidden z-40">
                <Menu className="text-[#2AD883] cursor-pointer" onClick={() => setIsVisible(true)}/>
            </div>

            

        </div>
    </>
  )
  
}
