'use client';
import {TypeAnimation} from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-row text-white justify-center items-center pt-7 lg:h-screen">
      {/* Konten Utama */}
      <div className='w-8/10 bg-[#1B0926] my-18 py-18 rounded-lg text-center border-[#472C57] border-2 flex flex-col justify-center items-center'>
        <TypeAnimation
          sequence={[
            'Software Engineer', 1500,
            `Full Stack Web Developer`, 1500,
            'AI Engineer', 1500
          ]}
          wrapper='p'
          speed = {60}
          // style={{ fontFamily: `var(--font-openSans)`, fontSize: '1.25rem', color: 'black'}}
          className='font-openSans md:text-md text-white'
          repeat={Infinity}
        />
        <h1 className='font-poppins mt-6 md:text-4xl mb-16 font-bold'>Ramandha Putra <br /> Suryahadi</h1>
        <hr className='w-5/10' />
        <a href="#about" className='flex justify-center'>
          <p className='font-openSans bg-gradient-to-r from-[#F12D78] to-[#8927FB] p-4 rounded-2xl mt-16 w-12/12'>Get Started</p>
        </a>
      </div>
      
    </section>
  );
}