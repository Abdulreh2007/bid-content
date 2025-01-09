"use client";
import { useState, useEffect } from "react";
import { FaComments, FaStar, FaChartLine, FaLaptop, FaMobileAlt, FaShoppingCart, FaPaintBrush, FaCog, FaChartPie } from "react-icons/fa";

const ServiceSlider = () => {
  const services = [
    { icon: <FaComments />, name: "Messaging" },
    { icon: <FaStar />, name: "Brand" },
    { icon: <FaChartLine />, name: "SEO" },
    { icon: <FaLaptop />, name: "Website" },
    { icon: <FaMobileAlt />, name: "Mobile Apps" },
    { icon: <FaShoppingCart />, name: "E-Commerce" },
    { icon: <FaPaintBrush />, name: "Design" },
    { icon: <FaCog />, name: "Development" },
    { icon: <FaChartPie />, name: "Analytics" },
  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev >= 10 ? 0 : prev + 0.5)); // Smooth looping
    }, 20); // Adjust speed for smooth scrolling
    return () => clearInterval(interval);
  }, []);

  const renderServices = [...services, ...services, ...services]; // Duplicate services for seamless loop

  return (
    <div className="relative w-full max-w-screen overflow-hidden bg-gray-900 py-6">
      {/* Line 1: Sliding Right */}
      <div
        className="absolute top-0 w-[300%] flex items-center space-x-12"
        style={{
          transform: `translateX(-${offset}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        {renderServices.map((service, idx) => (
          <div
            key={`line1-${idx}`}
            className="flex items-center space-x-3 px-6 py-3 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <span className="text-2xl text-yellow-400">{service.icon}</span>
            <p className="text-lg font-semibold text-white">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Line 2: Sliding Left */}
      <div
        className="absolute top-16 w-[300%] flex items-center space-x-12"
        style={{
          transform: `translateX(${offset}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        {renderServices.map((service, idx) => (
          <div
            key={`line2-${idx}`}
            className="flex items-center space-x-3 px-6 py-3 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <span className="text-2xl text-yellow-400">{service.icon}</span>
            <p className="text-lg font-semibold text-white">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Line 3: Sliding Right */}
      <div
        className="absolute top-32 w-[300%] flex items-center space-x-12"
        style={{
          transform: `translateX(-${offset}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        {renderServices.map((service, idx) => (
          <div
            key={`line3-${idx}`}
            className="flex items-center space-x-3 px-6 py-3 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <span className="text-2xl text-yellow-400">{service.icon}</span>
            <p className="text-lg font-semibold text-white">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
