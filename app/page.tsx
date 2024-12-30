import Image from "next/image";
import Responsivenav from "./components/Navbar/responsivenav";
import HeroSection from "./components/hero";
import ServicesSection from "./components/service";


export default function Home() {
  return (
   <div className="bg-black h-[120vh]">
    <Responsivenav/>
    <HeroSection/>
    <ServicesSection/>
        
   </div>
  );
}
