import { cn } from "../utils/classes";

interface ButtonProps {
    
    href: string;
    className?: string;
    children: React.ReactNode; 
    color: 'green' | 'blue';
    hoverColor: 'green' | 'blue';
}

export const Button = ({ href, className, color, hoverColor, children } : ButtonProps) => {

    const colorVariants = {
        green: 'bg-green-600',
        blue: 'bg-blue-600',
    };

    const hoverColorVariants = {
        green: 'hover:bg-green-700',
        blue: 'hover:bg-blue-700',
    };

    return <a href={href} id={children as string} className={cn(`px-4 py-2 rounded transition`, colorVariants[color], hoverColorVariants[hoverColor], className ?? "")}>{children}</a>
}