"use client"

import { useState } from "react"


const cards = [
  { id: 1, title: "Introduction to Web Development with HTML, CSS, JavaScript", type: "web", path: 'webintro.jpg'},
  { id: 2, title: "Developing Responsive Web Pages Using HTML5 and CSS3", type: "web", path: 'responsiveweb.jpg'},
  { id: 3, title: "Advanced React", type: "web", path: 'advancedreact.jpg'},
  { id: 4, title: "React Native", type: "web", path:'reactnative.jpg'},
  { id: 5, title: "React Basics", type: "web", path: 'reactbasic.jpg'},
  { id: 6, title: "Mobile Development and JavaScript", type: "web", path: 'mobiledev.jpg'},
  { id: 7, title: "Introduction to Mobile Development", type: "web", path: 'mobiledev2.jpg'},
  { id: 8, title: "Memulai Pemrograman dengan Python", type: "machine learning", path: 'pythonintro.jpg'},
  { id: 9, title: "Belajar Dasar AI", type: "machine learning", path: 'aifund.jpg'},
  { id: 10, title: "Practical Machine Learning", type: "machine learning", path: 'practicalml.jpg'},
  { id: 11, title: "Introduction to Machine Learning", type: "machine learning", path: 'mlintro.jpg'},
  { id: 12, title: "Scikit-Learn For Machine Learning Classification Problems", type: "machine learning", path: 'scikitlearn.jpg'},
  { id: 13, title: "Artificial Intelligence Essentials V2", type: "machine learning", path: 'aiessentials.jpg'},
  { id: 14, title: "Machine Learning with Python (V2)", type: "machine learning", path: 'mlwpython.jpg'},
  { id: 15, title: "Python Project for Data Science", type: "machine learning", path: 'pythonds.jpg'},
  { id: 16, title: "Python Project for Data Engineering", type: "machine learning", path: 'pythonde.jpg'},
  { id: 17, title: "Foundations for Big Data Analysis with SQL", type: "machine learning", path: 'bigdatafound.jpg'},
  { id: 18, title: "A Crash Course in Data Science", type: "machine learning", path: 'ds.jpg'},
  { id: 19, title: "The Data Scientist’s Toolbox", type: "machine learning", path: 'dstoolbox.jpg'},
  { id: 20, title: "Data Science in Real Life", type: "machine learning", path: 'dsrl.jpg'},
];

export default function Certifications(){
    const [selectedtype, setSelectedtype] = useState("all");

    const filteredCards = selectedtype === "all" ? cards : cards.filter(card => card.type === selectedtype)

    return (
        <section id="certifications" className="h-180 z-0 flex justify-center items-start mt-15">
            <div className="text-center flex flex-col justify-center items-center px-16 gap-5">
                <h1 className="text-white text-4xl font-poppins font-semibold text-right">CERTIFICATIONS</h1>
                <div className="text-white flex flex-row gap-17 mt-7">
                    {["all", "web", "machine learning"].map(type => (
                        <button key={type} onClick={() => setSelectedtype(type)} className={`rounded-lg transition p-3 ${selectedtype === type ? 
                            "bg-white text-black" : "bg-white/10 backdrop-blur-md"
                        }`}>
                            {type.toUpperCase()}
                        </button>
                    ))}
                    {/* <a href="" className="group">
                        All
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a>
                    <a href="" className="group">
                        Web
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a>
                    <a href="" className="group">
                        Machine Learning
                        <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                    </a> */}
                </div>
                <a href="https://www.linkedin.com/in/ramandhaps/details/certifications/" className="group text-white font-openSans">
                Check Out More
                <span className="block max-w-0 bg-white group-hover:max-w-full transition-all duration-500 h-0.5"></span>
                </a>
                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-140 overflow-scroll hide-scrollbar">
                    {filteredCards.map(card=>(
                        <div key={card.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
                            <img src={`/cert/${card.path}`} alt="" />
                            <h3 className="text-lg font-semibold text-white font-poppins">{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
            <div></div>
        </section>
    )
}