import ProjectShowcase from "./ProjectShowcase"


export default function Projects (){
    return(
        <section id="about" className="bg-[#091E2B] h-screen z-0 flex flex-col justify-center items-start">
            <div className="text-center flex justify-center items-center px-16 h-1/5 gap-6 w-full">
                <h1 className="text-white text-4xl font-poppins font-semibold text-center">PROJECTS</h1>
            </div>
            <div className="flex justify-center items-center w-full h-4/5">
                <ProjectShowcase/>
            </div>
        </section>
    )
}