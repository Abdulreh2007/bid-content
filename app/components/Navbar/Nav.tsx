'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { navlinks } from '../../../constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import logo from '../../../public/logo-removebg-preview.png';

// Define nav props
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbg(window.scrollY >= 99);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split navigation links
  const leftLinks = navlinks.slice(0, Math.ceil(navlinks.length / 2));
  const rightLinks = navlinks.slice(Math.ceil(navlinks.length / 2));

  return (
    <header
      className={`fixed top-0 w-full z-[1000] h-[12vh] transition-all duration-200  ${
        navbg
          ? 'bg-white bg-opacity-5 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto ">
        {/* Left Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {leftLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-white font-medium nav__link transition duration-300">
                {link.label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Logo in Center */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <Image
            src={logo}
            alt="ContentAid Logo"
            className="rounded-lg"
            width={120}
            height={80}
            priority
          />
        </div>

        {/* Right Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {rightLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-white font-medium hover:text-[#8becda] transition duration-300">
                {link.label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <HiBars3BottomRight
            onClick={openNav}
            className="text-white w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
