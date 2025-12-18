// Declaring that this component is for client side
'use client';

// import Swiper and SwiperSlide JS for Content Swiping
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Image to make advanced, optimized img container
import Image from 'next/image';

// import Swiper styles
import 'swiper/css';
//Package for pagination
import 'swiper/css/pagination';
//Package for navigation
import 'swiper/css/navigation';
//Package for setting the side slides
import 'swiper/css/effect-coverflow';

import { Pagination, Navigation, Scrollbar, EffectCoverflow } from 'swiper/modules'

export default function ProjectShowcase() {
    return (
        <div className="w-full py-8">
            <Swiper
                centeredSlides={true} // Active slide will be positioned in center
                effect="coverflow" // Swiper effect to imitate album cover
                spaceBetween={30} // Spacing between swiper content
                slidesPerView="auto" // Changed to auto for better panorama effect
                navigation={true} // Activating navigation buttons
                pagination={{ clickable: true }} // Activating paginations (The one with dots)
                scrollbar={{ draggable: true }} // Enabling gesture of dragging to switch between contents
                className="w-[90%] max-w-6xl"
                loop={true} // Making the contents do not repeat
                
                // Add coverflow effect parameters for panorama look
                coverflowEffect={{
                    rotate: 15,        // Angle of rotation
                    stretch: 0,        // Stretch space between slides
                    depth: 200,        // Depth offset in px
                    modifier: 1,       // Effect multiplier
                    slideShadows: true, // Enable slide shadows
                }}
                // Responsive breakpoints
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
                modules={[Pagination, Navigation, Scrollbar, EffectCoverflow]} // Added EffectCoverflow
            >
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="">
                            <Image 
                                alt="slide 1" 
                                src="/projects/project1.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="">
                            <Image 
                                alt="slide 2" 
                                src="/projects/project2.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="https://google.com">
                            <Image 
                                alt="slide 3" 
                                src="/projects/project3.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="">
                            <Image 
                                alt="slide 4" 
                                src="/projects/project4.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="">
                            <Image 
                                alt="slide 5" 
                                src="/projects/project5.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <div className="w-64 h-36 md:w-80 md:h-44 lg:w-120 lg:h-76 overflow-hidden rounded-lg">
                        <a href="https://github.com/ramaGitScholar?tab=repositories">
                            <Image 
                                alt="slide 5" 
                                src="/projects/findoutmore.jpg" 
                                width={600} 
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}