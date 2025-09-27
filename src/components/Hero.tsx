'use client';
import {TypeAnimation} from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-baseline text-white overflow-hidden" style={{ paddingTop: "var(--navbar-height)" }}>
      {/* Container untuk Background Images */}
      <div className="absolute inset-0 z-0">
        <img src="/sun.svg" className="absolute right-56 top-5 w-[450px]" alt="Sun"></img>
        <img src="/mountains.svg" className="absolute inset-x-0 bottom-0 w-full" alt="Mountains"></img>
      </div>

      {/* Konten Utama */}
      <div className="z-10 flex flex-row justify-between w-full px-16 mt-16 items-center">
        {/* Gambar Profil */}
        <img src="/profile-picture.svg" alt="profile picture" />

        {/* Teks Deskripsi */}
        <div className="text-black h-full flex flex-col gap-16">
          <h1 className="text-4xl font-poppins font-semibold text-right mr-4">RAMANDHA PUTRA S</h1>
          
          <div className="border-r-2 border-black pr-4 flex flex-col gap-3">
            <TypeAnimation
        sequence={[
          `Hello I'm Ramandha Putra Suryahadi`, 2000,
          'A Software Engineer', 2000,
          'With great power comes great skibidi sigma', 2000
        ]}
        wrapper='h1'
        speed={25}
        style={{ fontFamily: `var(--font-poppins)`, fontSize: '1.25rem', color: 'black'}}
        repeat={Infinity}
        />
          </div>
        </div>
      </div>
    </section>
  );
}