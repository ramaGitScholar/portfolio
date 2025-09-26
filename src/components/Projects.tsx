"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/navigation";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Website pribadi dibuat dengan Next.js + Tailwind",
    image: "/images/portfolio.png",
    link: "https://your-portfolio.com",
  },
  {
    title: "E-commerce App",
    description: "Fullstack app dengan React + Node.js + MySQL",
    image: "/images/ecommerce.png",
    link: "https://github.com/username/ecommerce",
  },
  {
    title: "Data Dashboard",
    description: "Dashboard visualisasi data dengan Python & React",
    image: "/images/dashboard.png",
    link: "https://your-dashboard-demo.com",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden group relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
