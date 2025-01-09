import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import img1 from "../../public/client1.jpg";
import img2 from "../../public/client2.jpg";
import img3 from "../../public/client3.jpg";
import img4 from "../../public/client4.jpg";
import img5 from "../../public/client5.png";
import img6 from "../../public/client6.jpg";
import img7 from "../../public/client7.jpg";
import img8 from "../../public/client8.jpg";
import img9 from "../../public/client9.jpg";

function Logoslider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide leading-tight underline decoration-blue-500 decoration-4 underline-offset-4">
  Our Customers
</h2>
        <p className="text-gray-600 mt-4">
          Proudly collaborating with some of the most innovative companies.
        </p>
      </div>
      <div className="overflow-hidden ">
        <Marquee gradient={true} speed={80} pauseOnHover={true} >
          {images.map((img, index) => (
            <div
              key={index}
              className="mx-6  flex items-center justify-center min-w-[200px] max-w-[200px] "
            >
              <Image
                src={img}
                alt={`Client Logo ${index + 1}`}
                className="object-contain rounded-lg"
                width={100}
                height={80}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Logoslider;
