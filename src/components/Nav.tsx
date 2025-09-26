// Declaring that the component runs on client side
"use client"

// Importing link for optimized link
import Link from "next/link";
import React from "react";

// useState to store dynamic variable, useEffect to handle action based on values change
import { useRef, useState, useEffect } from "react";

export default function Nav (){
    // show useState to handle whether nav will be visible or not
    const [show, setShow] = useState(true);

    // lastScroll used to compare with the previous scrolled pixels
    const [lastScrollY, setLastScrollY] = useState(0);

    const navRef = useRef<HTMLElement>(null);


    // useEffect for handling scroll
    useEffect(() => {
        const handleScroll = () => {
            // if current windows scroll is bigger (say 20 px) than the last one say we were in 10px then setShow would be false
            if (window.scrollY > lastScrollY){
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY)
        }

        // event listener based on window scroll
        window.addEventListener("scroll", handleScroll);

        // always remove the listener at the end of use effect
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY])

    useEffect(() => {
    if (navRef.current) {
      // take the height of the nav
      const navHeight = navRef.current.offsetHeight;
      // store in CSS variable
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navHeight}px`
      );
    }
  }, []);


    return(
            <nav ref={navRef}
        className={`bg-white/30 backdrop-blur-lg px-16 z-50 fixed top-0 left-0 w-full shadow-md 
            transition-all duration-500 ease-in-out
            ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        >
                <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-2">
                    <Link href="/" className="flex items-center">
                        <span className="text-black hover:text-white transition-colors duration-500 font-poppins font-semibold">
                            Ramandha Putra Suryahadi
                        </span>
                    </Link>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex space-x-8 items-center">
                            <Link href="#hero" className="group text-black transition-colors duration-500 font-openSans">
                                Home
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#about" className="group text-black transition-colors duration-500 font-openSans">
                                About Me
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#certifications" className="group text-black transition-colors duration-500 font-openSans">
                                Certifications
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#projects" className="group text-black transition-colors duration-500 font-openSans">
                                Projects
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#contactme" className="group text-black transition-colors duration-500 font-openSans">
                                Contact Me
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center gap-1 border-black rounded-4xl p-2 border-2">
                                <Link href="https://github.com/ramaGitScholar"><img className="scale-60 hover:scale-100 transition-all" src="/github-icon.svg" alt="" /></Link>
                                <Link href="https://www.instagram.com/ramandha_putras/"><img className="scale-60 hover:scale-100 transition-all" src="/instagram-icon.svg" alt="" /></Link>
                                <Link href="https://www.linkedin.com/in/ramandhaps/"><img className="scale-60 hover:scale-100 transition-all" src="/linkedin-icon.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </nav>
    )
}