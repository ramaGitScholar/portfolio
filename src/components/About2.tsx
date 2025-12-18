import Skills from "./Skills"
import Image from "next/image"

export default function About2 (){
    return(
        <section
            id="about2"
            className="flex flex-col md:h-140 bg-[url('/bg-skills.png')] bg-cover justify-center items-center lg:h-screen mt-15"
            >
            <div className="h-1/5 flex justify-center items-start">
                <Skills from={0} to={5}></Skills>
            </div>
            <div className="flex justify-center items-center text-center z-30 my-8">
                <p className="text-white text-sm md:text-md font-openSans bg-black/30 backdrop-blur-md border-[#472C57] border-2 rounded-xl p-14 m-10 lg:mx-60">
                    I have hands-on experience in full-stack web development, delivering interactive UI/UX and reliable backend systems across personal, team, and professional projects, and I am currently expanding my expertise in AI, especially computer vision.
                </p>
            </div>
            <div className="h-1/5 flex justify-center items-end">
                <Skills from={5} to={11}></Skills>
            </div>
        </section>
    )
}