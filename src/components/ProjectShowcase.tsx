'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useState } from 'react'; // Import useState

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Pagination, Navigation, Scrollbar, EffectCoverflow } from 'swiper/modules'

export default function ProjectShowcase() {
    // State untuk tracking slide aktif
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Array deskripsi untuk setiap proyek
    const projectDescriptions = [
        {id: 1, link: "https://github.com/ramaGitScholar/laravel-sineflix", alt: "slide1", image_path: "/projects/project1.jpg", desc: "SineFlix - Website Rekomendasi Film"},
        {id: 2, link: "https://github.com/ramaGitScholar/airline-ticket-reservation", alt: "slide2", image_path: "/projects/project2.jpg", desc: "Airline Ticket Reservation - Web untuk memesan tiket pesawat secara daring"},
        {id: 3, link: "#projects", alt: "slide3", image_path: "/projects/project3.jpg", desc: "Color Detection - Identifikasi objek yang memiliki warna tertentu"},
        {id: 4, link: "https://github.com/ramaGitScholar/qolbuapp", alt: "slide4", image_path: "/projects/project4.jpg", desc: "Qolbu App - Platform manajemen data untuk yayasann Qolbu Hasanah"},
        {id: 5, link: "https://github.com/ramaGitScholar/backend_digimon", alt: "slide5", image_path: "/projects/project5.jpg", desc: "Tegalmanggung website - Profil Desa Tegalmanggung berbentuk website"},
        {id: 6, link: "https://github.com/ramaGitScholar", alt: "slide6", image_path: "/projects/findoutmore.jpg", desc: "Cek selengkapnya pada github!"}
    ];

    return (
        <div className="w-full py-8">
            <Swiper
                centeredSlides={true}
                effect="coverflow"
                spaceBetween={30}
                slidesPerView="auto"
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-[90%] max-w-6xl"
                loop={true}
                
                // Event handler untuk update deskripsi saat slide berubah
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex); // realIndex untuk handle loop
                }}
                
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                    },
                }}
                modules={[Pagination, Navigation, Scrollbar, EffectCoverflow]}
            >
                {projectDescriptions.map(project => (
                    <SwiperSlide key={project.id} className="!w-auto">
                        <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                            <a href={project.link}>
                                <Image 
                                    alt="slide 1" 
                                    src={project.image_path} 
                                    width={600} 
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            
            {/* Teks yang berubah sesuai slide aktif */}
            <p className='text-white text-center font-openSans mt-7'>
                {projectDescriptions[activeIndex].desc}
            </p>
        </div>
    )
}