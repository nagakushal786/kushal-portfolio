"use client";

import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: "About me",
  description: "I am a dedicated MERN stack developer and competitive programmer, with a primary focus on building responsive websites. Currently, I am pursuing a B.Tech at IIITDM Kurnool.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Naga Kushal Vankadara"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9392684533"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "nagakushal10@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Telugu"
    },
  ]
}

const experience = {
  icon: "/assets/experience.png",
  title: "My Experience",
  description: "Below is a concise summary of my professional experience in web development.",
  items: [
    {
      company: "IIIT Bengaluru",
      position: "Backend development Intern",
      duration: "June 2024 - August 2024"
    }
  ]
}

const education = {
  icon: "/assets/education.png",
  title: "My Education",
  description: "Below is a concise summary of my educational background.",
  items: [
    {
      institution: "Coding Ninjas",
      course: "Frontend development",
      duration: "2023"
    },
    {
      institution: "Coding Ninjas",
      course: "Backend development",
      duration: "2023"
    },
    {
      institution: "Coding Ninjas",
      course: "Advanced frontend with ReactJS",
      duration: "2024"
    },
    {
      institution: "Coding Ninjas",
      course: "Python programming with DSA",
      duration: "2023"
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "Below is a concise summary of my technical skills.",
  items: [
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS3"
    },
    {
      icon: <FaJs/>,
      name: "Javascript"
    },
    {
      icon: <FaBootstrap/>,
      name: "Bootstrap"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS"
    },
    {
      icon: <FaReact/>,
      name: "ReactJS"
    },
    {
      icon: <SiNextdotjs/>,
      name: "NextJS"
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJS"
    }
  ]  
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container max-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <span className="rounded-full bg-accent text-accent">.</span>
                <p className="max-w-[600px] text-white/60 mx-auto xl:max-0 xl:text-left">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-5">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume