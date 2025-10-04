import { cn } from "../utils/classes";
import { Ongoing } from "./ongoing";
import { TechStackBox } from "./techStackBox";

interface CertificationCardProps {
  title: string;
  img: string;
  verify: string
  description: string;
  date?: string;
  author?: string;
}

export const CertificationCard = ({ title, author, img, verify, date, description } : CertificationCardProps) => {
  return (
    <div className={cn(
        "group/card flex flex-col space-y-4 max-h-96 w-full rounded-lg border border-gray-700 bg-gray-800/50 p-4 overflow-hidden", 
        "text-white shadow-lg transition-transform",
        "hover:scale-[1.02] hover:shadow-2xl"
    )}>
        <div className={cn("absolute inset-0 w-full h-full opacity-0 rounded-lg z-10 pointer-events-none",
            "bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 group-hover/card:opacity-50",
            "group-hover/card:scale-[1.025]",
            "transition-all duration-300 "
        )}></div>
        <div className={cn("flex items-center justify-between z-0")}>
            <span className={cn("flex flex-col space-y-1.5 gap-2 text-xl font-semibold",
                "lg:flex-row lg:items-center lg:space-y-0"
            )}>
                <span className="text-white">
                    {title}
                </span>
                <span className={cn("text-gray-400 hidden",
                    "lg:block"
                )}>
                    -
                </span>
                <span className="text-lg text-gray-400">
                    {author}
                </span>
            </span>
            <Ongoing completed={date ? true : false}>
                {date ? date : "Ongoing"}
            </Ongoing>
        </div>
        <div className="flex gap-2 text-balance">
            <span className={cn("text-sm text-gray-400",
                "lg:text-base",
            )}>
                {description}    
            </span>
            <div className="relative group/image ">
                <a href={verify} target="_blank">
                    <img src={img} alt={title} className={cn(
                        "w-2xl transition-all duration-300", 
                        "group-hover/image:brightness-50 group-hover/image:scale-110",
                        "rounded-lg shadow-lg"
                    )}/>
                    <div className={cn("opacity-0 invisible",
                        "group-hover/image:opacity-100 group-hover/image:visible transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    )}>                        
                        <TechStackBox>
                            Verify 
                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9e9e9e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.8374 14.1625L14.1625 9.8374" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>    
                        </TechStackBox>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}