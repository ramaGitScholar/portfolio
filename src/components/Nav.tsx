import Link from "next/link";
import React from "react";

export default function Nav (){
    return(
        <nav className="px-16">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-10">
                <Link href="/" className="flex items-center">
                    <span className="text-black hover:text-white transition-colors duration-500 font-poppins font-semibold">
                        Ramandha Putra Suryahadi
                    </span>
                </Link>
                <div className="flex flex-row items-center gap-4">
                    <div className="flex space-x-8 items-center">
                        <Link href="#about" className="group text-black transition-colors duration-500 font-openSans">
                            Home
                            <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                        </Link>
                        <Link href="#about" className="group text-black transition-colors duration-500 font-openSans">
                            About
                            <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                        </Link>
                        <Link href="#about" className="group text-black transition-colors duration-500 font-openSans">
                            Certifications
                            <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                        </Link>
                        <Link href="#about" className="group text-black transition-colors duration-500 font-openSans">
                            Projects
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