import { cn } from "../utils/classes";

export const TechStackBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className={cn(
        "flex items-center gap-1 align-middle border border-gray-900 rounded-3xl px-3 py-1 bg-gray-800/80",
        "hover:bg-gray-700",
        "text-sm text-gray-300",
        "transition duration-100 ease-in-out"
      )}
    >
      {children}
    </span>
  );
};
