import type { OngoingProps } from "../types";

export const Ongoing = ({ children, completed } : OngoingProps) => {
    return (
        <span className={`text-sm ${completed ? "text-green-600" : "text-blue-600"} ${completed ? "bg-green-500/10" : "bg-blue-500/10"} min-w-29 text-center p-1 px-2 rounded-2xl`}>{children}</span>
    )
}