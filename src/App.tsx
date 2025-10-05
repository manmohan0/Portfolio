import './App.css'
import { useEffect, useState } from 'react'
import { Button } from './Components/button'
import { SkillCard } from './Components/skillsCard'
import { cn } from './utils/classes'
import { ExperienceCard } from './Components/experienceCard'
import { ExperienceModal } from './Components/experienceModal'
import { ProjectCard } from './Components/projectCard'
import { CertificationCard } from './Components/certificationCard'
import { AchievementCard } from './Components/achievementCard'
import { SocialMedia } from './Components/SocialMedia'
import { motion, useAnimate } from 'framer-motion'
import { Buttons, skillContent, experienceCards, projectCards, certificationCards, achievementCards } from './content'

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedExperienceIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [scope, animate] = useAnimate()
  
  const animateSequences = async () => {
    const logos = animate("#SocialMedia", {
      opacity: 1,
      y: 0,
      scale: 1
    }, {
      duration: 0.3,
      delay: 0.3
    })

    const description = animate('#description span', {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0
    }, {
      delay: (i) => (0.1 + i * 0.005)
    })

    animate('#name span', {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0
    }, {
      duration: 0.3,
      delay: (i) => (0.1 + i * 0.03)
    })

    animate('#Buttons', {
      opacity: 1,
      filter: 'blur(0px)',
    }, {
      duration: 0.3,
    })

    await Promise.all([description, logos])
  }

  useEffect(() => {
    animateSequences()
  }, [])

  return (
    <>
      <div ref={scope} className={cn("max-w-3xl my-20 mx-auto min-h-screen flex flex-col justify-center space-y-20 px-4",
        "lg:flex-col",
        { "filter blur-md transition-filter duration-300": isModalOpen }
      )}>
        <div id='Introduction' className={cn('flex flex-col justify-center items-center space-y-2',
          'lg:flex-row'
        )}>
          <div className='flex flex-col w-full items-center justify-between space-y-10 h-full'>
            <motion.img src="Me.png" className={cn(
              'w-[150px] h-[150px] rounded-2xl',
              'shadow-[0_0_10px_rgba(200,200,200,1)]'
            )} alt="Profile pic" 
            initial={{
              opacity: 0,
              scale: 0.5,
              y: -100
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{
              duration: 0.3
            }}
            whileHover={{
              scale: 1.1,
            }}/>
            <motion.div initial={{ 
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.3
            }}>
              <motion.div initial={{
                opacity: 0,
                y: -60,
                scale: 0
              }} id='SocialMedia' 
              animate={{ 
                opacity: 1,
                y: 0
              }} className='SocialMedia'>
                <SocialMedia logoSize={'36px'}/>
              </motion.div>
            </motion.div>
          </div>
          <div className='ml-10 text-white'>
            <div>
              <h1 id={'name'} className={cn(
                'TextGradient',
                'text-sm whitespace-pre'
              )}>{'Hello,\nI\'m Manmohan Wable'.split("").map((char, index) => (
                <motion.span key={index} className="TextGradient" initial={{
                  opacity: 0,
                  filter: 'blur(4px)',
                  y: -20
                }} >{char}</motion.span>
              ))}</h1>
              <p id='description' className='mt-4 text-lg text-gray-300 text-wrap'>{'A Software Engineer passionate about backend development, AI, and building scalable web apps. I enjoy turning complex problems into simple, impactful solutions.'.split("").map((char, index) => (
                <motion.span key={index} initial={{
                  opacity: 0,
                  filter: 'blur(4px)',
                  y: -20
                }} >{char}</motion.span>))}</p>
            </div>
            <motion.div initial={{
              opacity: 0,
              filter: 'blur(4px)',
            }} id='Buttons' className='flex lg:flex-row mt-6 space-x-4'>
              {Buttons.map((button) => (
                <Button key={button.name} href={button.href} color={button.color} hoverColor={button.hoverColor}>
                  {button.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
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
        <div id="Experience" className='flex flex-col space-y-2 text-white'>
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
            className='TextGradient'>
              Experience
            </motion.span>
            <motion.span initial={{
              opacity: 0,
              filter: 'blur(4px)',
              y: 20
            }}
            transition={{
              duration: 0.3
            }} 
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.7
            }}
            className='text-base text-gray-500/90'>
              Here's a timeline of my professional journey, showcasing my roles and contributions in full-stack development.
            </motion.span>
            <div className='flex flex-col space-y-4 mt-4'>
              <div className='flex flex-col space-y-4'>
                {experienceCards.map((card, index) => (
                  <motion.div initial={{
                    opacity: 0,
                    scale: 0,
                    y: 20
                  }}
                  transition={{
                    duration: 0.3
                  }} 
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7
                  }} key={index}>
                    <ExperienceCard id={index.toString()} description={card.keyAchievements[0]} {...card} onCardClick={() => openModal(index)} />
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
        <div id="projects" className='flex flex-col space-y-2 text-white'>
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
            className='TextGradient'>
            Projects
          </motion.span>
          <motion.span initial={{
              opacity: 0,
              filter: 'blur(4px)',
              y: 20
            }}
            transition={{
              duration: 0.3
            }} 
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.7
            }}
            className='text-base text-gray-500/90'>
            A selection of my recent work, demonstrating my skills in full-stack development and my passion for creating impactful applications.
          </motion.span>
          <div className={cn(
            'grid grid-cols-1 mt-4',
            'lg:grid-cols-2',
          )}>
            {projectCards.map((project, index) => (
              <motion.div initial={{
                    opacity: 0,
                    scale: 0,
                    y: 20
                  }}
                  transition={{
                    duration: 0.3
                  }} 
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7
                  }} key={index} className='p-2'>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
        <div id='certifications' className='flex flex-col space-y-2 text-white'>
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
            className='TextGradient'>
            Certifications
          </motion.span>
          <div className='flex flex-col space-y-2 mt-4 text-white'>
            {certificationCards.map((certification, index) => (
              <motion.div initial={{
                    opacity: 0,
                    scale: 0,
                    y: 20
                  }}
                  transition={{
                    duration: 0.3
                  }} 
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7
                  }} key={index} className='p-2'>
                <CertificationCard {...certification} />
              </motion.div>
            ))}
          </div>
        </div>
        <div id='achievements' className='flex flex-col space-y-2 text-white'>
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
            className='TextGradient'>
            Extra-Curricular / Achievments
          </motion.span>
          <div className='flex flex-col space-y-2 mt-4 text-white'>
            {achievementCards.map((achievement, index) => (
              <motion.div initial={{
                    opacity: 0,
                    scale: 0,
                    y: 20
                  }}
                  transition={{
                    duration: 0.3
                  }} 
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7
                  }} key={index}>
                <AchievementCard key={index} {...achievement}/>
              </motion.div>
            ))}
          </div>
        </div>
        <div id='footer' className='flex justify-between items-center mt-10'>
          <span className='text-sm text-gray-500/90'>
            © 2025 Manmohan Wable.
          </span>
          <span>
            <SocialMedia logoSize={'26px'}/>
          </span>
        </div>
      </div>
      <ExperienceModal id={selectedExperienceIndex.toString()} isOpen={isModalOpen} onClose={closeModal} experience={experienceCards[selectedExperienceIndex]} />
    </>
  )
}

export default App
