import { cn } from "../utils/classes";
import { TechStackBox } from "./techStackBox";

interface AchievementCardProps { 
    title: string; 
    description: string; 
    link?: string 
    logo?: React.ReactNode;
}

export const AchievementCard = ({ logo, title, description, link } : AchievementCardProps) => {
    return (
        <div className={cn(
            "relative group flex border text-wrap text-white bg-gray-800/50 border-gray-600 rounded-lg p-7 m-2 gap-3 overflow-hidden",
            "hover:shadow-lg", 
            "transition-shadow duration-300"
        )}>
            <div className={cn("absolute inset-0 w-full h-full opacity-0 rounded-lg z-10 pointer-events-none",
                "bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 group-hover:opacity-50",
                "group-hover:scale-[1.025]",
                "transition-all duration-300 "
            )}></div>
            <div className="flex gap-2">
                <span>{logo}</span>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between items-center gap-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                {link && (
                    <a href={link}>
                        <TechStackBox>
                            Verify 
                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9e9e9e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.8374 14.1625L14.1625 9.8374" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>    
                        </TechStackBox>
                    </a>
                )}
                </div>
                <div>
                    <p className="mt-2 text-gray-300">{description}</p>
                </div>
            </div>
        </div>
    )
}