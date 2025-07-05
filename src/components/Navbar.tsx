import Link from "next/link"
import links from "@/data/Link"

export default function Navbar () {
  return (
    <div className="flex items-center w-full fixed px-52 py-5 justify-between">
        <div className="text-[#2AD883] font-extrabold tracking-[10px]">
            LHR
        </div>
        <div className="flex items-center">
            {
                links.map((link) => {
                    return (
                        <Link
                            key={link}
                            href={link}
                            id={link}
                            className="text-[#767572] font-light me-6 hover:font-bold hover:text-white"
                         >
                        {link}
                    </Link>
                    )

                })
            }
        </div>
    </div>
  )
  
}
