import type { ReactNode } from "react";

export interface AchievementCardProps {
    title: string;
    description: string;
    link?: string;
    logo?: ReactNode;
}

export interface ButtonProps {
    href: string;
    className?: string;
    children: ReactNode;
    color: 'green' | 'blue';
    hoverColor: 'green' | 'blue';
    shadowColor: 'green' | 'blue';
}

export interface CertificationCardProps {
    title: string;
    img: string;
    verify: string;
    description: string;
    date?: string;
    author?: string;
}

export interface ExperienceCardProps {
    id: string;
    logo: ReactNode;
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

export interface Experience {
    title: string;
    company: string;
    keyAchievements: string[];
    techStack: string[];
    startDate: string;
    endDate?: string;
    location?: string;
}

export interface ExperienceModalProps {
    id: string;
    isOpen: boolean;
    onClose: () => void;
    experience: Experience;
}

export interface LogoProps {
    size: string;
}

export interface OngoingProps {
    children: ReactNode;
    completed?: boolean;
}

export interface ProjectCardProps {
    live: string;
    GitHub: string;
    title: string;
    description: string;
    techStack: string[];
    inDevelopment?: boolean;
    gradient?: string;
}

export interface SkillCardProps {
    Logo: ReactNode;
    LogoColor: 'blue' | 'green' | 'red' | 'purple' | 'pink';
    Name: string;
    content: string[];
}

export interface TechStackBoxProps {
    children: ReactNode;
}

export interface SocialMediaProps {
    logoSize: string;
}