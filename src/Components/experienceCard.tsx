import { cn } from "../utils/classes";
import { TechStackBox } from "./techStackBox";

interface ExperienceCardProps {
    logo: React.ReactNode;
    title: string;
    company: string;
    description: string;
    techStack: string[];
    Live?: string;
    GitHub?: string;
    startDate: string;
    endDate?: string;
    location?: string;
    onCardClick: () => void;
}

export const ExperienceCard = ({ logo, title, startDate, endDate, company, location, description, techStack, Live, GitHub, onCardClick }: ExperienceCardProps) => {

    return <>
        <div onClick={onCardClick} className={cn(
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
                            "flex space-x-1.5 align-middle text-center"
                        )}>
                            <svg width="22px" height="22px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
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
        </div>
    </>
}
