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
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
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
                <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
                <section id="projects" className="flex flex-col items-center justify-center min-h-[90vh] p-12">
                    <div className="h-auto rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                        <InfiniteMovingCards
                            items={projects}
                            direction="right"
                            speed="slow"
                        />
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