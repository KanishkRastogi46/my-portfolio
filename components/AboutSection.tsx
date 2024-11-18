'use client'
import React from 'react';
import { HeroHighlight } from './hero-highlight';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <HeroHighlight>
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] gap-6 p-12">
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                <Image 
                    src="/images/portfolio-img.jpg" 
                    alt="Your Name" 
                    width={500} 
                    height={500} 
                    className="w-[60%] h-auto rounded-full shadow-md" 
                    priority
                />
            </div>
            <div className="md:w-1/2 md:pr-8 dark:text-white text-black flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                Hello!👋 I&#39;m <span className="dark:text-violet-500 text-violet-700 font-bold">Kanishk Rastogi</span>, a <span className='font-bold'>Computer Science</span> student based in <span className='font-bold'>India</span> currently pursuing my B.Tech from <span className='font-bold'>Dr APJ Abdul Kalam Technical University (AKTU), Lucknow</span>. Currently I&#39;m <span className='font-bold'>AI/ML Lead in Google Developers Group, BBDNIIT</span>.
                </p>
                <p className="text-lg mb-6">
                My key area of interests is <span className='font-bold'>Full Stack Development</span> and I&#39;m also passionate about <span className='font-bold'>Data Science and Machine Learning</span> on which I&#39;m working on these days. Technologies I&#39;m familiar with are:- <span className='font-bold'>Node JS, Express JS React JS, Next JS, Django, Flask, MongoDB, PostgreSQL, MySQL, Numpy, Pandas, Matplotlib, Scikit-Learn, Git, BeautifulSoup</span>.
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
