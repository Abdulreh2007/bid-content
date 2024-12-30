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
      <section className="bg-gray-100 text-gray-900 py-16 px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Our Services Made For You?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Explore our range of services tailored to elevate your brand.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 text-center border border-gray-200"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                {/* Description */}
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  