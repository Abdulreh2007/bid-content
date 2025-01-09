export default function ServicesSection() {
    const services = [
      {
        title: "Video Editing",
        description:
          "Enhance your brand's storytelling with our professional video editing services. We transform raw footage into engaging, polished videos that captivate your audience and convey your message effectively.",
        icon: "🎥",
      },
      {
        title: "3D Animation",
        description:
          "Bring your concepts to life with our stunning 3D animations. Whether for product demos or creative storytelling, our animations add a dynamic, eye-catching element to your marketing strategy.",
        icon: "🖌️",
      },
      {
        title: "Social Media Management",
        description:
          "Maximize your online presence with our expert social media management. We handle content creation, scheduling, and engagement, ensuring your brand stays active and connects with your audience.",
        icon: "📱",
      },
      {
        title: "Content Creation",
        description:
          "Gain your audience's attention with organic high-quality content. From blog posts to social media updates, we create compelling, relevant content that establishes your brand as an industry leader.",
        icon: "✍️",
      },
      {
        title: "Voice-overs",
        description:
          "Add a professional touch to your videos and presentations with our voice-over services. Choose from skilled human voice actors or high-quality AI voice-overs to deliver clear, engaging narration that perfectly aligns with your brand’s tone.",
        icon: "🎙️",
      },
      {
        title: "Scriptwriting",
        description:
          "Develop powerful, engaging scripts with our expert scriptwriting services. We create compelling narratives for videos, commercials, and presentations, driving your marketing messages home.",
        icon: "📝",
      },
    ];
  
    return (
      <section className="bg-white text-black py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              What We'll Help You With?
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              Unlock the full potential of your brand with our tailored services.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#8becda]  to-[#0a7a75] text-white rounded-full mb-6 text-4xl">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  