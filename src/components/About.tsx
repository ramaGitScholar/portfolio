import Skills from "./Skills"

export default function About (){
    return(
        <section id="about" className="bg-[#091E2B] h-screen z-0 flex flex-col justify-center items-center">
            <div className="text-center flex flex-col justify-center items-center px-16 h-2/5 gap-6">
                <h1 className="text-white text-4xl font-poppins font-semibold text-right">ABOUT</h1>
                <p className="text-white font-openSans">I’m a software engineer that has the capability of building several digital solutions from web dev to machine learning while also keeping my collaborations skill intact by joining several organization and volunteering activities.</p>
            </div>            
            <Skills></Skills>
        </section>
    )
}