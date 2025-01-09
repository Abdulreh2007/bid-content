import Image from "next/image";
import HeroSection from "./components/hero";
import ServicesSection from "./components/service";
import Logoslider from "./components/clients";
import { AnimatedTestimonialsDemo } from "./components/testimonials";
import { FAQSection } from "./components/faq";
import ServiceSlider from "./components/3lineslide";
import HeroSection2 from "./components/hero2";





export default function Home() {
  return (
   <div className="overflow-hidden">
  
    <HeroSection/>
    <HeroSection2/>
    <Logoslider/>
    <ServicesSection/>
    <AnimatedTestimonialsDemo/>
    <FAQSection/>
    
        
   </div>
  );
}
