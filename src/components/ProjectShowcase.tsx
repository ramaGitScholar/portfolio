'use client';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Pagination, Navigation, Scrollbar, EffectCoverflow } from 'swiper/modules'

export default function ProjectShowcase() {
    return (
        <div className="w-full py-8">
            <Swiper
                centeredSlides={true}
                effect="coverflow"
                spaceBetween={30}
                slidesPerView="auto" // Changed to auto for better panorama effect
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-[90%] max-w-6xl"
                loop={true}
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination, Navigation, Scrollbar, EffectCoverflow]} // Added EffectCoverflow
            >
                <SwiperSlide className="!w-auto">
                    <Image 
                        alt="slide 1" 
                        src="/Aot wallpaper.jpg" 
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <Image 
                        alt="slide 2" 
                        src="/Aot wallpaper.jpg" 
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <Image 
                        alt="slide 3" 
                        src="/Aot wallpaper.jpg" 
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <Image 
                        alt="slide 4" 
                        src="/Aot wallpaper.jpg" 
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <Image 
                        alt="slide 5" 
                        src="/Aot wallpaper.jpg" 
                        width={600} 
                        height={300}
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}