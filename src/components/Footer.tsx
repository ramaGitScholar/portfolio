import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Footer (){
    return(
        <footer className="bg-[#13001E] backdrop-blur-lg text-white flex flex-col">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center w-full">
                <div className="w-full px-16 py-7 text-center font-poppins text-sm">©️ 2025 Ramandha Putra Suryahadi. All Rights Reserved. <br />All trademarks and logos belong to their respective owners.</div>                
            </div>
        </footer>
    )
}