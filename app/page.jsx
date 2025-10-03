import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-1">Fullstack Developer, AI Enthusiast</span>
            <h1 className="h1">
              Hello I&apos;m <br/> <span className="text-accent">Naga Kushal Vankadara</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mt-2">
              I am a passionate MERN stack developer and competitive programmer, currently pursuing a B.Tech 
              at IIITDM Kurnool, with active experience in ML, LLMs, CV, and XAI.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Kushal_resume.pdf" download="Kushal_resume.pdf">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home