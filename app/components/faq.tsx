"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import React Icons

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "I'm unsure if you can demonstrate past success with projects similar to ours.",
      answer:
        "At ContentAid, we’ve built an extensive portfolio through diverse freelance projects and long-term partnerships across various industries. You can view samples of our work for quality assurance, and we’re happy to discuss detailed case studies in our upcoming meeting.",
    },
    {
      question: "I'm concerned about the consistency and quality of your work.",
      answer:
        "Operating remotely, efficient systems and meticulous management are vital to our operations at ContentAid. We specialize in creating customized systems, templates, and themes tailored to each client, ensuring every piece of content enhances your brand’s personality while maintaining consistency.",
    },
    {
      question: "I'm unclear on how you handle revisions and incorporate client feedback.",
      answer:
        "Client feedback fuels our continuous improvement at ContentAid. We offer a 24-hour revision policy to ensure prompt adjustments without disrupting your schedule, allowing us to refine our work and exceed your expectations.",
    },
    {
      question: "I'm looking for a provider with specific experience in our industry.",
      answer:
        "With extensive industry experience, we excel in multiple sectors. If your industry requires specialized expertise beyond our current scope, we collaborate with industry experts to deliver tailored solutions, a topic we can explore further during our meeting.",
    },
    {
      question: "I need assurance that you can consistently meet deadlines.",
      answer:
        "Punctuality is a cornerstone of our commitment at ContentAid. While delays are rare, we prioritize transparency and accountability. If unforeseen circumstances arise, rest assured we proactively communicate and offer solutions to mitigate any impact on your project.",
    },
    {
      question: "I'm exploring options and want to understand what makes you stand out from other agencies.",
      answer:
        "At ContentAid, we prioritize organic content marketing strategies aimed at cultivating brand loyalty and fostering a dedicated audience. Our approach emphasizes building genuine connections rather than relying solely on monetary investments. Let’s discuss how our values align and determine if we’re the right fit for your needs.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Have more questions? Feel free to leave a text, and we'll be glad to help!</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transition-all hover:shadow-xl">
              <button
                className="w-full text-left py-5 px-6 bg-gray-100 text-xl font-semibold text-gray-800 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="h-6 w-6 text-[#B8FFF9] transition-transform transform rotate-180" />
                ) : (
                  <FaChevronDown className="h-6 w-6 text-blue-500 transition-transform transform rotate-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 text-base border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
