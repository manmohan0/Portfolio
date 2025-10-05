import { cn } from "../utils/classes";
import { GitHubIcon } from "./GitHubIcon";
import { Ongoing } from "./ongoing";
import { TechStackBox } from "./techStackBox";
import type { ProjectCardProps } from "../types";

export const ProjectCard = ({ live, GitHub, title, description, techStack, inDevelopment = false }: ProjectCardProps) => {
    return (
        <div onClick={() => { if (live && live !== '#') window.open(live, '_blank') }} className="relative h-full group">
            <div className={cn("group absolute inset-0 w-full h-full opacity-0 rounded-lg z-10 pointer-events-none",
                "bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 group-hover:opacity-100",
                "group-hover:scale-[1.025] group-hover:cursor-pointer",
                "transition-all duration-300 "
            )}></div>
            <div className={cn(
                "group border border-gray-700 bg-gray-800/50 rounded-lg p-6 flex flex-col justify-between h-full z-0",
                `group-hover:border-gray-500 group-hover:scale-[1.025]`,
                "transition-all duration-300 ease-in-out"
            )}>
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                        {inDevelopment && <Ongoing>In development</Ongoing>}
                    </div>
                    <p className="text-gray-400 mb-4 max-h-48 overflow-hidden">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <TechStackBox key={tech}>
                                {tech}
                            </TechStackBox>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex justify-end pointer-events-auto">
                    {GitHub && GitHub !== '#' && (
                        <a href={GitHub} target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub" onClick={(e) => { e.stopPropagation(); }}>
                            <span className={cn(
                                "border border-gray-900 rounded-3xl px-3 py-1 bg-gray-800/80",
                                "hover:bg-gray-700 hover:cursor-pointer",
                                "text-sm text-gray-300",
                                "transition duration-100 ease-in-out",
                                "flex space-x-1.5 align-middle text-center"
                            )}>
                                <GitHubIcon />
                                <span>GitHub</span>
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}