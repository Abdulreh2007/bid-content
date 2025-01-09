import React from "react";
import yellowCar from "../../public/team.png";
import Image from "next/image";
import { div } from "framer-motion/client";
import ServiceSlider from "./3lineslide";

const Hero = () => {
  return (
    <div>
    <div className="dark:bg-gray-950 dark:text-white duration-300 bg-black">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div
            data-aos="zoom-in"
            className="order-1 sm:order-2 relative flex justify-center"
          >
            <Image
              src={yellowCar}
              alt="hero"
              className=" sm:max-w-[280px] md:max-w-[450px] rounded-lg shadow-xl"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffbb33] text-white shadow-lg"
            >
              <p className="text-gray-100 text-sm animate-pulse ">⭐ Projects</p>
              <h1 className="font-bold text-lg animate-pulse">600+ <span className="font-normal">Done</span></h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold leading-tight text-white"
            >
              Build Brands in the{" "}
              <span className="text-[#37f5d2]">Digital Agency</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg text-gray-300"
            >
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam nisi sunt expedita asperiores, totam necessitatibus commodi corporis aut perspiciatis, harum odio fuga voluptatem saepe neque, sint quibusdam dolore nulla.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="border-2 border-[#2cc4b3] text-white py-3 px-6 rounded-xl hover:bg-[#2cc4b3] transition duration-300 ease-in-out transform hover:scale-105 font-semibold "
            >
              CHECK IF YOU QUALIFY - BOOK FREE CALL
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* <ServiceSlider/> */}
    </div>
  );
};

export default Hero;
