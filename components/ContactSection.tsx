"use client"

import { HeroHighlight } from "./hero-highlight"
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

export default function ContactSection() {
    return (
        <>
            <HeroHighlight>
                <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
                <div id="contact" className="flex flex-col md:flex-row items-center md:justify-between min-h-[90vh] p-6"> 
                    <div className="section-1 w-full md:w-1/2 mb-4 md:mb-0"> 
                        <a 
                            href="mailto:kanishkrastogi46@gmail.com" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaEnvelope className="inline mr-2" /> kanishkrastogi46@gmail.com 
                        </a> 
                        <a 
                            href="tel:+916388155055" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaPhone className="inline mr-2" /> +91 6388155055
                        </a> 
                        <a 
                            href="https://www.linkedin.com/in/your-profile" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaLinkedin className="inline mr-2" /> LinkedIn 
                        </a> 
                        <a 
                            href="https://www.instagram.com/your-profile" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaInstagram className="inline mr-2" /> Instagram 
                        </a> 
                        <a 
                            href="https://twitter.com/your-profile" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaTwitter className="inline mr-2" /> Twitter 
                        </a> 
                    </div> 
                    <div className="section-2 w-full md:w-1/2"> 
                        <form className="flex flex-col"> 
                            <label htmlFor="email" className="mb-2 text-lg">Email:</label> 
                            <input type="email" id="email" className="mb-4 p-2 border border-gray-300 rounded" /> 
                            
                            <label htmlFor="feedback" className="mb-2 text-lg">Feedback:</label> 
                            <textarea id="feedback" className="mb-4 p-2 border border-gray-300 rounded" rows={4}></textarea> <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button> 
                        </form> 
                    </div> 
                </div>
            </HeroHighlight>
        </>
    )
}