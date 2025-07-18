import Link from "next/link"
import links from "@/data/Link"

export default function Navbar () {
  return (
    <div className="flex items-center w-full fixed px-52 py-5 justify-between z-20">
        <div className="text-[#2AD883] font-extrabold tracking-[10px]">
            LHR
        </div>
        <div className="flex items-center">
            {
                links.map((link,index) => {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            
                            className="text-[#767572] font-light ms-2 px-8 transition duration-150 ease-in-out hover:text-white  hover:transition hover:ease-in-out hover:duration-150" 
                         >
                        {link.name}
                    </Link>
                    )

                })
            }
        </div>
    </div>
  )
  
}
