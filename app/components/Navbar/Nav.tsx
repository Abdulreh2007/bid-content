"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navlinks } from '../../../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import logo from '../../../public/logo-removebg-preview.png'

// define nav props
type Props ={
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
const [navbg,setnavbg] = useState(false)
 useEffect(()=> {
  const handler = ()=>{
    if(window.scrollY>=99){
      setnavbg(true)
    }
    if(window.scrollY<99){
      setnavbg(false)
    }
  }
  window.addEventListener('scroll', handler)
  return ()=>window.removeEventListener('scroll', handler)

 })
  return (
    <div className={`fixed ${navbg?'bg-indigo-800':'fixed'} w-full transition-all duration-200 h-[12vh]  z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto'>
 {/* logo */}
 <Image src={logo} alt='logo' className='rounded-2xl' width={200} height={120}/>
     {/* nav links */}
     <div className='hidden lg:flex items-center space-x-10'>
      {navlinks.map((link)=>{
        return <Link key={link.id} href={link.url}>
           <p className='nav__link'>{link.label}</p>
        </Link>
      })}
     </div>
     {/* button */}
     <div className='flex items-center space-x-4'>
     <button className="px-6 py-2 text-base md:text-lg hover:bg-[#8becda]  font-semibold border-2 border-[#B8FFF9] text-black rounded-lg shadow-md bg-[#B8FFF9] hover:text-gray-900 hover:scale-105 transition-transform duration-300">
              Schedule a Meeting
            </button>
      {/* burder */}
      <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden '/>
     </div>
      </div>
      </div>
  )
}

export default Nav