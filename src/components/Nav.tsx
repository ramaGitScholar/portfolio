// Declaring that the component runs on client side
"use client"

// Importing link for optimized link
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";



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
        className={`bg-[#13001E] backdrop-blur-lg px-16 py-5 z-50 fixed top-0 left-0 w-full shadow-md 
            transition-all duration-500 ease-in-out text-white
            ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        >
                <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-2">
                    <Link href="/" className="flex items-center">
                        <span className="text-white hover:text-white transition-colors duration-500 font-poppins font-semibold">
                            Ramandha
                        </span>
                    </Link>
                    <div className="hidden md:flex flex-row items-center gap-4">
                        <div className="flex space-x-8 items-center">
                            <Link href="#hero" className="group text-white transition-colors duration-500 font-openSans">
                                Home
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#about" className="group text-white transition-colors duration-500 font-openSans">
                                About
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#projects" className="group text-white transition-colors duration-500 font-openSans">
                                Projects
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#certifications" className="group text-white transition-colors duration-500 font-openSans">
                                Certifications
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                            <Link href="#contactme" className="group text-white transition-colors duration-500 font-openSans">
                                Contact
                                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                            </Link>
                        </div>
                        <div className="hidden lg:flex flex-row justify-between items-center gap-5 border-black rounded-4xl p-2 border-2">
                                <Link href="https://github.com/ramaGitScholar"><SiGithub className="scale-125 hover:scale-150 transition-all"/></Link>
                                <Link href="https://www.instagram.com/ramandha_putras/"><SiInstagram className="scale-125 hover:scale-150 transition-all"/></Link>
                                <Link href="https://www.linkedin.com/in/ramandhaps/"><SiLinkedin className="scale-125 hover:scale-150 transition-all"/></Link>
                        </div>
                    </div>
                </div>
            </nav>
    )
}