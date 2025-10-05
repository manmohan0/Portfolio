import { motion } from 'framer-motion';
import { SkillCard } from '../skillsCard';
import { skillContent } from '../../content';
import { cn } from '../../utils/classes';

export const Skills = () => {
    return (
        <div id='Skills' className='text-white'>
            <motion.span initial={{
                opacity: 0
            }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.7
                }}
                viewport={{
                    once: true,
                    amount: 0.7
                }}
                className='text-3xl font-bold mb-4 TextGradient'>
                Skills
            </motion.span>
            <div className={cn(
                "grid grid-cols-1 gap-4 mt-4",
                "md:grid-cols-2"
            )}>
                {Object.keys(skillContent).map((skill) => (
                    <motion.div key={skill} initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                        transition={{
                            duration: 0.3
                        }}
                        viewport={{
                            once: true,
                            amount: 0.7
                        }}>
                        <SkillCard key={skill} Logo={skillContent[skill].logo} Name={skill} LogoColor={'blue'} content={skillContent[skill].content} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}