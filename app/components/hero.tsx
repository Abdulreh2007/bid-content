export default function HeroSection() {
    return (
      <section className="bg-[#0D1B2A] text-white py-20 px-8 md:px-16 lg:px-32">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center mt-24">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Welcome to <span className="text-[#8becda]  ">Content Aid</span>
          </h1>
  
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl italic font-medium mb-6">
            Empowering Your Content Journey.
          </p>
  
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            With expertise across industries, we craft content that captures attention and drives results. 
            Let us transform your ideas into impactful storytelling that engages your audience and achieves your goals.
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 text-base md:text-lg font-semibold bg-[#B8FFF9] text-gray-900 rounded-lg shadow-md hover:bg-[#8becda]   hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
           
          </div>
        </div>
      </section>
    );
  }
  