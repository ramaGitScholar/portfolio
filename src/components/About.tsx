import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; // Impor Slider
import SkillCard from './SkillCard'; // Impor komponen kartu
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Contoh ikon

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-poppins font-bold mb-8">
          Tentang Saya
        </h2>
        
        {/* Konten deskripsi diri */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 mb-12">
          {/* Gambar Profil */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profil Saya"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-600"
            />
          </div>
          <div className="text-left font-openSans max-w-lg">
            <p className="mb-4 text-gray-300">
              Halo, saya [Nama Anda], seorang [Jabatan/Spesialisasi]. Saya memiliki passion dalam membangun solusi digital yang efisien dan user-friendly.
            </p>
            <p className="text-gray-300">
              Saya ahli dalam [sebutkan keahlian utama]. Saya selalu mencari tantangan baru untuk berkembang.
            </p>
          </div>
        </div>

        {/* Slider untuk Kartu */}
        <div className="w-full">
          <Slider {...settings}>
            <SkillCard title="React" icon={<FaReact />} />
            <SkillCard title="JavaScript" icon={<FaJsSquare />} />
            <SkillCard title="HTML" icon={<FaHtml5 />} />
            <SkillCard title="CSS" icon={<FaCss3Alt />} />
            {/* Tambahkan lebih banyak SkillCard di sini */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;

// export default function About (){
//     return(
//         <section className="bg-[#091E2B] h-180 z-0 flex justify-center items-center">
//             <div className="text-center flex flex-col justify-center items-center px-16">
//                 <h1 className="text-white text-4xl font-poppins font-semibold text-right">RAMANDHA PUTRA S</h1>
//                 <p className="text-white font-openSans">I’m a software engineer that has the capability of building several digital solutions from web dev to machine learning while also keeping my collaborations skill intact by joining several organization and volunteering activities.</p>
//             </div>
//             <div></div>
//             <div></div>
//         </section>
//     )
// }