import React from 'react';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to <span className="text-indigo-600 font-semibold">ContentAid</span>, where creativity meets strategy.
          </p>
        </div>

        {/* Who Are We Section */}
        <div className="flex flex-col lg:flex-row items-center mb-16 gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Who Are We</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At <span className="text-indigo-600 font-semibold">ContentAid</span>, we are a team of experienced professionals ready to help your brand shine. Guided by creativity, quality, and client-focused values, we specialize in crafting impactful content tailored to your needs. Your success is our success, and we’re committed to building strong, lasting relationships.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image src='/about.webp' height={700} width={800} alt='who'/>
          </div>
        </div>

        {/* Mission and Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission at <span className="text-indigo-600 font-semibold">ContentAid</span> is to transform your ideas into outstanding content. We aim to empower your brand through services like video editing, 3D animation, and social media management, helping you connect with your audience and achieve your goals.
            </p>
          </div>

          {/* What We Do Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
            <ul className="mt-4 text-gray-600 leading-relaxed space-y-2">
              <li>🎯 Social Media Management</li>
              <li>🎥 Video Editing</li>
              <li>🌟 3D Animation</li>
              <li>🖼️ Thumbnail Creation</li>
              <li>📋 Content Planning & Strategy</li>
              <li>🎙️ Voice-overs (AI and human actors)</li>
            </ul>
          </div>
        </div>

        {/* 6-D Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our 6-D Process</h2>
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Discover', desc: 'We start by understanding your brand, goals, and audience.' },
              { title: 'Define', desc: 'We outline the project scope, objectives, and timeline.' },
              { title: 'Design', desc: 'Our creative team crafts concepts tailored to your vision.' },
              { title: 'Develop', desc: 'We bring ideas to life using the best tools and techniques.' },
              { title: 'Deploy', desc: 'We launch content on relevant platforms for maximum impact.' },
              { title: 'Deliver', desc: 'We review, gather feedback, and improve for future success.' },
            ].map((step, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-600">{index + 1}. {step.title}</h4>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid lg:grid-cols-2 gap-12 mt-8 text-left">
            <div>
              <p className="text-gray-600 leading-relaxed">
                <strong>24x7 Live Support:</strong> Our dedicated support team ensures seamless communication and prompt resolution.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Result-Oriented Projects:</strong> We focus on delivering measurable outcomes aligned with your goals.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Best ROI Techniques:</strong> We ensure maximum returns through proven strategies.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Experienced Professionals:</strong> Our team has expertise across diverse industries.
              </p>
            </div>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="grid lg:grid-cols-3 gap-12 text-center">
          {[
            { value: '100+', label: 'Satisfied Clients' },
            { value: '200+', label: 'Projects Completed' },
            { value: '20M+', label: 'Engagements Generated' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-indigo-50 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-indigo-600">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
