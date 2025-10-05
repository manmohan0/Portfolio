import { cn } from "../utils/classes";
import { TechStackBox } from "./techStackBox";
import type { SkillCardProps } from "../types";

export const SkillCard = ({ Logo, Name, LogoColor, content }: SkillCardProps) => {

    const colorVariants = {
        blue: 'text-blue-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',
        pink: 'text-pink-500',
    };

    return (
        <div className="flex flex-col space-x-5 border border-gray-700 rounded-xl max-w-md p-3 bg-gray-800/50 h-full">
            <div className="flex space-x-3 items-center">
                <span className={cn("w-9 h-9 text-2xl", colorVariants[LogoColor])}>{Logo}</span>
                <span className="text-xl text-white">{Name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                {content.map((item, index) => (
                    <TechStackBox key={index}>{item}</TechStackBox>
                ))}
            </div>
        </div>
    )
}