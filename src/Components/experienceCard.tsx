import { motion } from "framer-motion";
import { cn } from "../utils/classes";
import { GitHubLogo } from "./logos";
import { TechStackBox } from "./techStackBox";
import type { ExperienceCardProps } from "../types";

export const ExperienceCard = ({ id, logo, title, startDate, endDate, company, location, description, techStack, Live, GitHub, onCardClick }: ExperienceCardProps) => {

    return <>
        <motion.div layoutId={id} onClick={onCardClick} className={cn(
            "w-full p-8 rounded-lg flex flex-col space-y-2",
            "bg-gray-800/70 border border-gray-800",
            "hover:bg-gray-900/70 hover:border-gray-700 hover:cursor-pointer",
            "transition duration-200 ease-in-out",
        )}>
            <div className={cn(
                "flex space-x-2 justify-between",
                "text-lg font-semibold"
            )}>
                <div className="flex space-x-2 items-center">
                    {logo}
                    <div className={cn("flex flex-col space-x-2 space-y-2",
                        "lg:flex-row lg:items-center lg:space-y-0"
                    )}>
                        <span className="text-2xl font-semibold">
                            {title}
                        </span>
                        <span className={cn(
                            "text-gray-500/90 hidden",
                            "lg:block",    
                        )}>
                            ·
                        </span>
                        <span className={cn("font-normal text-gray-500/90",
                            "lg:text-lg",
                        )}>
                            {company}
                        </span>
                    </div>
                </div>
                <div className="font-normal text-base text-gray-500/90 flex space-x-4">
                    {Live && <a href={Live} onClick={(e) => { e.stopPropagation(); }}><span className={cn(
                        "border border-gray-900 rounded-3xl px-3 py-1 bg-gray-800/80",
                        "hover:bg-gray-700 hover:cursor-pointer",
                        "text-sm text-gray-300",
                        "transition duration-100 ease-in-out",
                        "flex space-x-1.5 align-middle text-center"
                    )}>
                        <svg width="22px" height="22px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#6b6b6b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="96" cy="96" r="74" stroke="#6b6b6b" strokeWidth="12"></circle><ellipse cx="96" cy="96" stroke="#6b6b6b" strokeWidth="12" rx="30" ry="74"></ellipse><path stroke="#6b6b6b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M28 72h136M28 120h136"></path></g></svg>
                        <span>Live</span>
                    </span></a>}
                    {GitHub && <a href={GitHub} onClick={(e) => { e.stopPropagation(); }}>
                        <span className={cn(
                            "border border-gray-900 rounded-3xl px-3 py-1 bg-gray-800/80",
                            "hover:bg-gray-700 hover:cursor-pointer",
                            "text-sm text-gray-300",
                            "transition duration-100 ease-in-out",
                            "flex space-x-1.5 align-middle text-center items-center"
                        )}>
                        <GitHubLogo size={"16px"}/>    
                        <span>GitHub</span>
                    </span></a>}
                </div>
            </div>
            <div className="flex space-x-2 text-gray-500/90">
                <span>
                    {startDate} - {endDate ? endDate : "Present"}
                </span>
                <span className="text-gray-500/90">
                    ·
                </span>
                <span className="">
                    {location ? location : "Remote"}
                </span>
            </div>
            <div className="text-normal text-gray-200">
                {description}
            </div>
            <div className="flex flex-wrap gap-2">
                {techStack && techStack.length > 0 && techStack.map((tech, index) => (
                    <TechStackBox key={index}>{tech}</TechStackBox>
                ))}
            </div>
        </motion.div>
    </>
}
