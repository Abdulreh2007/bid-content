import React from "react";
import hero from '../../public/hero2.webp';
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white to-pink-100 px-6 py-12 lg:px-20">
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
          Hire Expert{" "}
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
            Website
          </span>{" "}
          Services.
        </h1>
        <p className="mt-4 text-4xl lg:text-6xl font-bold text-[#8becda]">
        From Concept  <br /><span className="text-gray-900"> to Creation.</span>
        </p>
        
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Let’s Talk - Book Free Call
          </a>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="mt-8 lg:mt-0 lg:block">
        <Image
          src={hero} // Replace with your image URL
          alt="Team Illustration"
          className="w-full lg:w-[98vh] lg:h-[94vh] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
