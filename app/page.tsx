"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/hero-highlight";
import NavigationBar from "@/components/NavigationBar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <div>
        <NavigationBar/>

        <HeroHighlight>
            <motion.h1
                initial={{
                opacity: 0,
                y: 20,
                }}
                animate={{
                opacity: 1,
                y: [20, -5, 0],
                }}
                transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto min-h-screen flex items-center justify-center"
            >
                <div className="">
                    👋 Welcome <span className="text-violet-500">Coding-Heads</span>, <br/> I believe in 4 words{" "}<br/>
                    <Highlight className="text-black dark:text-white">
                    Eat, Sleep, Code, Repeat.
                    </Highlight>
                </div>
            </motion.h1>
        </HeroHighlight>

        <AboutSection/>
        <div className="overflow-hidden">
            <ProjectSection/>   
        </div>
        <ContactSection/>
    </div>
  );
}

