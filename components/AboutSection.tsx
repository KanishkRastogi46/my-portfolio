'use client'
import React from 'react';
import { HeroHighlight } from './hero-highlight';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <HeroHighlight>
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <section id="about" className="flex flex-col md:flex-row items-center justify-between min-h-screen p-12">
            <div className="md:w-1/2 mt-8 md:mt-0">
            <Image 
                src="https://drive.google.com/uc?id=1TBEjJjNWlH0ZEWi7N2EvvFCNQUSMkvg1" 
                alt="Your Name" 
                width={500} 
                height={500} 
                className="w-[60%] h-auto rounded-full shadow-md" 
                priority
            />
            </div>
            <div className="md:w-1/2 md:pr-8 dark:text-white text-black">
                <p className="text-lg mb-4">
                Hello! I'm <span className="dark:text-violet-500 text-violet-700">Kanishk Rastogi</span> , a passionate developer with experience in building web applications.
                I have a deep interest in web scraping, data analysis, and creating intuitive user interfaces.
                My goal is to leverage my skills to build products that make a difference.
                </p>
                <p className="text-lg mb-6">
                In my spare time, I enjoy exploring new technologies, reading, and surfing across internet. I believe in continuous learning 
                and always strive to improve myself both personally and professionally.
                </p>
                <Link 
                    href={"https://drive.google.com/file/d/1ib9eID7kgAOiPM6z-ziaSn75gl2Cs_gl/view?usp=sharing"}
                    target='_blank'
                >
                    <button className="outline dark:outline-violet-400 outline-violet-700 rounded-lg p-2 capitalize dark:text-white text-black hover:bg-violet-400 ">Resume</button>
                </Link>
            </div>
        </section>
    </HeroHighlight>
  );
};

export default AboutSection;
