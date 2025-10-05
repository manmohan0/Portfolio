import { cn } from "../utils/classes";
import type { ButtonProps } from "../types";

export const Button = ({ href, className, color, hoverColor, shadowColor, children } : ButtonProps) => {

    const colorVariants = {
        green: 'bg-green-600',
        blue: 'bg-blue-600',
    };

    const hoverColorVariants = {
        green: 'hover:bg-green-700',
        blue: 'hover:bg-blue-700',
    };

    const shadowVariants = {
        green: 'hover:shadow-green-500/50',
        blue: 'hover:shadow-blue-500/50',
    };

    return <a href={href} id={children as string} className={cn(`px-4 py-2 rounded transition`, colorVariants[color], hoverColorVariants[hoverColor], shadowVariants[shadowColor], className ?? "")}>{children}</a>
}