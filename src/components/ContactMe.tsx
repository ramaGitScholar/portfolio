"use client"

import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"

export default function ContactMe(){
    return(
        <section id="contactme" className="flex flex-row text-white justify-center items-center pt-7 lg:h-screen mt-15">
      {/* Konten Utama */}
      <div className='w-8/10 bg-[#1B0926] my-18 py-18 rounded-lg text-center border-[#472C57] border-2 flex flex-col justify-center items-center'>
        {/* <TypeAnimation
          sequence={[
            'Software Engineer', 200,
            `Full Stack Web Developer`, 200,
            'AI Engineer', 200
          ]}
          wrapper='p'
          speed={12}
          // style={{ fontFamily: `var(--font-openSans)`, fontSize: '1.25rem', color: 'black'}}
          className='font-openSans md:text-md text-white'
          repeat={Infinity}
        /> */}
        <h1 className='font-poppins mt-6 md:text-4xl mb-4 font-bold'>Thank You</h1>
        <p className='font-openSans bg-gradient-to-r from-[#F12D78] to-[#8927FB] p-4 rounded-2xl mt-4'>for your attention</p>
        <hr className="w-5/10 mt-8" />
        <p className='font-openSans mt-2'>Get in touch with me</p>
        <p className="font-openSans text-sm">email: ramandhasuryahadi@gmail.com</p>
        <div className="flex flex-row justify-between items-center gap-18 p-2 mt-5">
          <Link href="https://github.com/ramaGitScholar">
            <span className="group inline-flex p-3 rounded-full border border-white hover:bg-white transition-all">
              <SiGithub className="text-white group-hover:text-black w-6 h-6" />
            </span>
          </Link>
          <Link href="https://www.instagram.com/ramandha_putras/">
            <span className="inline-flex p-3 rounded-full border border-white hover:bg-gradient-to-t from-[#fb8f4d] to-[#7047c7] transition-all">
              <SiInstagram className="w-6 h-6" />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/ramandhaps/">
            <span className="inline-flex p-3 rounded-full border border-white hover:bg-[#0066c8] transition-all">
              <SiLinkedin className="w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
      
    </section>
    )
}