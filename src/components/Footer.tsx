import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Footer (){
    return(
        <footer className=" flex flex-col">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center w-full bg-[#1E5E86]">
                <div className="w-full px-16 py-12  bg-[#BFBFBF] border-b-2 border-black/30">
                    <div className="flex flex-row items-center"><Link href="https://github.com/ramaGitScholar"><SiGithub className="scale-125 hover:scale-150 transition-all" color="black"/></Link><p className="text-black font-openSans pl-3"> : https://github.com/ramaGitScholar</p></div>
                    <div className="flex flex-row items-center"><Link href="https://www.instagram.com/ramandha_putras/"><SiInstagram className="scale-125 hover:scale-150 transition-all" color="black"/></Link><p className="text-black font-openSans pl-3"> : https://www.instagram.com/ramandha_putras/</p></div>
                    <div className="flex flex-row items-center"><Link href="https://www.linkedin.com/in/ramandhaps/"><SiLinkedin className="scale-125 hover:scale-150 transition-all" color="black"/></Link><p className="text-black font-openSans pl-3">: https://www.linkedin.com/in/ramandhaps/</p></div>
                </div>
                <div className="w-full px-16 py-7 bg-[#BFBFBF] text-center">©️ 2025 Ramandha Putra Suryahadi. All Rights Reserved</div>                
            </div>
        </footer>
    )
}