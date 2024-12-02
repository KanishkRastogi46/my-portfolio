"use client"

import { useState } from "react"
import { HeroHighlight } from "./hero-highlight"
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ContactSection() {
    const [email , setEmail] = useState("")
    const [feedback , setFeedback] = useState("")

    const { toast } = useToast()

    const handleSubmit = function (e : React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        if (email.trim() === "" || feedback.trim() === "") {
            toast({
                title: "Hey, Visitor",
                variant : "destructive",
                description: "Please enter your email and feedback",
            })
        }
        else {
            toast({
                title: "Hey, Visitor",
                variant : "default",
                description: `Thanks for your feedback ${email}`,
            })
        }
    }

    return (
        <>
            <HeroHighlight>
                <div id="contact" className="flex flex-col items-center justify-between min-h-screen p-6"> 
                    <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
                    <div className="section-2 w-full "> 
                        <form className="flex flex-col" > 
                            <label htmlFor="email" className="mb-2 text-lg">Email:</label> 
                            <input 
                                type="email" 
                                className="mb-4 p-2 border border-gray-300 rounded-xl" 
                                placeholder="xyz@example.com"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            /> 
                            
                            <label htmlFor="feedback" className="mb-2 text-lg">Feedback:</label> 
                            <textarea 
                                className="mb-4 p-2 border border-gray-300 rounded-xl" 
                                rows={4} 
                                placeholder="Provide your Feedback"
                                value={feedback}
                                onChange={(e)=>setFeedback(e.target.value)}
                            />

                            <button 
                                type="submit" 
                                onClick={handleSubmit}
                                className="p-2 bg-violet-500 text-white rounded-xl hover:bg-blue-600"
                            >
                                Submit
                            </button> 
                        </form> 
                    </div> 
                    <div className="section-1 w-full mb-4 md:mb-0"> 
                        <Link 
                            href="mailto:kanishkrastogi46@gmail.com" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaEnvelope className="inline mr-2" /> kanishkrastogi46@gmail.com 
                        </Link> 

                        <Link 
                            href="tel:+916388155055" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaPhone className="inline mr-2" /> +91 6388155055
                        </Link> 

                        <Link 
                            href="https://www.linkedin.com/in/kanishk-rastogi-63a024238/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaLinkedin className="inline mr-2" /> LinkedIn 
                        </Link> 

                        <Link 
                            href="https://www.instagram.com/_kanishk_2503/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaInstagram className="inline mr-2" /> Instagram 
                        </Link> 

                        <Link 
                            href="https://x.com/_kanishk_2503" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block mb-4 text-lg text-black hover:text-blue-500 dark:text-white"> 
                            <FaTwitter className="inline mr-2" /> Twitter 
                        </Link> 
                    </div> 
                    
                </div>
            </HeroHighlight>
        </>
    )
}