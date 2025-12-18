"use client"

import { useState } from "react"


const cards = [
  { id: 1, title: "Frontend", type: "frontend", desc: "React, Tailwind" },
  { id: 2, title: "Backend", type: "backend", desc: "Node, API" },
  { id: 3, title: "Fullstack", type: "fullstack", desc: "Frontend + Backend" },
];

export default function Certifications(){
    return (
        <section id="certifications" className="h-180 z-0 flex justify-center items-center">
            <div className="text-center flex flex-col justify-center items-center px-16">
                <h1 className="text-white text-4xl font-poppins font-semibold text-right">CERTIFICATIONS</h1>
                <div className="text-white flex flex-row gap-17 mt-7">
                    <a href="" className="group">
                        All
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a>
                    <a href="" className="group">
                        Web
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a>
                    <a href="" className="group">
                        Machine Learning
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a>
                </div>
            </div>
            <div></div>
            <div></div>
        </section>
    )
}