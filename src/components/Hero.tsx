import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-baseline text-white overflow-hidden" style={{ paddingTop: "var(--navbar-height)" }}>
      {/* Container untuk Background Images */}
      <div className="absolute inset-0 z-0">
        <img src="/sun.svg" className="absolute right-56 top-5 w-[450px]" alt="Sun"></img>
        <img src="/mountains.svg" className="absolute inset-x-0 bottom-0 w-full" alt="Mountains"></img>
      </div>

      {/* Konten Utama */}
      <div className="z-10 flex flex-row justify-between w-full px-16 mt-16 items-end">
        {/* Gambar Profil */}
        <div className="relative border-white w-[350px] h-[350px] rounded-xl border-t-2 border-r-2 border-l-12 border-b-12">
        <Image
            className="absolute bottom-0 inset-x-0 w-full"
            src="/profile-picture.png"
            width={300}
            height={300}
            alt="Profile Picture"
        ></Image>
        </div>

        {/* Teks Deskripsi */}
        <div className="text-black h-full flex flex-col gap-16">
          <h1 className="text-4xl font-poppins font-semibold text-right mr-4">RAMANDHA PUTRA S</h1>
          <div className="border-r-2 border-black pr-4 flex flex-col gap-3">
            <h2 className="text-xl font-openSans font-semibold text-right">Software Engineer</h2>
            <p className="font-openSans text-right">With Great Power Comes Great Skibidi Sigma</p>
          </div>
        </div>
      </div>
    </section>
  );
}