import Skills from "./Skills"
import Image from "next/image"

export default function About (){
    return(
        <section
            id="about"
            className="relative flex justify-center items-center md:h-140 lg:h-screen mt-15" 
            >
            
            <div className="hidden md:block absolute left-0 inset-y-0 w-4/12 bg-[#EC2C7E] border-r-4 border-white z-0" />

            
            <div className="relative text-center flex flex-row items-end px-16 gap-6 z-30 self-end">
                <img
                className="w-2/5 self-end hidden md:block"
                src="/selfie.png"
                alt="selfie"
                />

                <div className="text-center flex flex-col mb-6">
                <h1 className="text-white text-sm md:text-2xl font-poppins font-semibold">
                    Hello, you can call me Rama
                </h1>

                <p className="text-white text-sm md:text-md font-openSans border-[#472C57] border-2 rounded-xl p-14 mt-6">
                    I am a software engineer with the ability to build a wide range of digital solutions, from web development to machine learning, while maintaining strong collaboration skills through involvement in various organizations and volunteer activities.
                </p>

                <a href="#about2" className="self-center mt-16 w-12 hover:w-14 transition-all">
                    <img src="/arrow-down.png" alt="" />
                </a>
                </div>
            </div>
        </section>
    )
}