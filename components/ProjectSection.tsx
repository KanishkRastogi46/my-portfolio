"use client"

import React from "react"
import { HeroHighlight } from "@/components/hero-highlight"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link"

export default function ProjectSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const projects = [
        {
            projectName : "Autodev Engineer",
            description : "A GenAI solution to automate the early stages of software development and help or assist a programmer",
            link : "https://github.com/KanishkRastogi46/Auto-Dev-Engineer"
        },
        {
            projectName : "Photogram",
            description : "A social media application to connect with people and share your lovely moments with them",
            link : "https://github.com/KanishkRastogi46/photogram"
        },
        {
            projectName : "Paginate-data-array",
            description : "An NPM package that can be used in JavaScript applications to provide limit on how much data should be displayed on the website coming from a particular source",
            link : "https://www.npmjs.com/package/paginate-data-array"
        },

        {
            projectName : "Samachar.in",
            description : "A news application to provide daily updates to the users about the world",
            link : "https://github.com/KanishkRastogi46/newsApp"
        },
        {
            projectName : "Flipkart Webscrape",
            description : "Using BeautifulSoup and requests module extract data about smartphones under 20k on flipkart",
            link : "https://github.com/KanishkRastogi46/flipkart_webscrape"
        },
    ]
    
    React.useEffect(() => {
        if (!api) {
        return
        }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    } , [api])

    return (
        <>
            <HeroHighlight>
                <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
                <section id="projects" className="flex flex-col items-center justify-center min-h-screen p-12">
                    <div className="mx-auto max-w-xs">
                        <Carousel setApi={setApi} className="w-full max-w-xs">
                            <CarouselContent>
                            {projects.map((project , index) => (
                                <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="h-full w-full flex aspect-square items-center justify-center p-6">
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    <div className=" w-full relative max-w-xs">
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-2 w-2 text-gray-300"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                            />
                                            </svg>
                                        </div>
                                
                                        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                            {project.projectName}
                                        </h1>
                                
                                        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                                            {project.description}
                                        </p>
                                        <Link 
                                            href={project.link}
                                            target='_blank'
                                        >
                                            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 capitalize">
                                                link
                                            </button>
                                        </Link>
                                        {/* Meaty part - Meteor effect */}
                                        <Meteors number={20} />
                                        </div>
                                    </div>
                                    </CardContent>
                                </Card>
                                </CarouselItem>
                            ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-center mt-4">
                        For more info visit my{" "}
                        <Link 
                            href={"https://github.com/KanishkRastogi46"} 
                            target="_blank"
                            className="hover:text-blue-400 text-violet-500"
                        >
                            GITHUB
                        </Link>
                    </h2>
                </section>
            </HeroHighlight>
        </>
    )
}