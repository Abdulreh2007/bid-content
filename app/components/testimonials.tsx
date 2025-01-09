import { div } from "framer-motion/client";
import { AnimatedTestimonials } from "../ui/animatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Great video editors to work with! Gives good suggestions and actively tries to help make sure the videos are edited in the best possible way.",
      name: "Omar Choi",
      designation: "Product Manager at TechFlow",
      src: "/cus1.avif",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/cus2.avif",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/cus3.avif",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/cus5.avif",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/cus4.avif",
    },
  ];
  return(
    <div id="testimonial">

       <AnimatedTestimonials  testimonials={testimonials} />;
    </div>
  ) 
}
