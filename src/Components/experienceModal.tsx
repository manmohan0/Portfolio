import { cn } from "../utils/classes";

interface Experience {
  title: string;
  company: string;
  keyAchievements: string[];
  techStack: string[];
  startDate: string;
  endDate?: string;
  location?: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: Experience;
}

export const ExperienceModal = ({ isOpen, onClose, experience }: ExperienceModalProps) => {
  
    if (!isOpen) {
        return null;
    }

  return (
    <div className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/50"
      )} onClick={onClose}>
      <div className={cn(
          "w-full max-w-2xl p-8 rounded-lg flex flex-col space-y-4",
          "bg-gray-900 border border-gray-700",
          "relative"
        )} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className={cn(
                "absolute top-4 right-4 text-gray-400", 
                "hover:text-white"
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
            </button>
            <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold text-white">{experience.title}</h2>
                <p className="text-lg text-gray-400">
                    {experience.company} ·{" "}
                    {experience.location ? experience.location : "Remote"}
                </p>
                <p className="text-sm text-gray-500">
                    {experience.startDate} -{" "}
                    {experience.endDate ? experience.endDate : "Present"}
                </p>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-lg text-white font-semibold">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-sm">
                        {tech}
                    </span>
                ))}
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-lg text-white font-semibold">Key Achievements</span>
                <div className="text-gray-500">
                    {experience.keyAchievements.map((achievement, index) => (
                        <p key={index} className="mb-2">
                            • {achievement}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
