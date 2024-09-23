import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <nav className="inline-block lg:hidden mx-auto flex-row items-center justify-center w-fit h-12  relative group">
        {/* Gradient border background */}
        <div className="absolute bg-gradient-to-r from-[#2e236c] via-[#433d8b] to-[#c8acd6] rounded-full group-hover:opacity-60 transition-all duration-500 animate-pulse-slow opacity-0"></div>
        
        {/* Inner content with glass effect */}
        <div className="relative  space-x-4 flex flex-row items-center justify-center w-full h-full bg-[#17153b] bg-opacity-20 rounded-full backdrop-blur-sm">
       

<Link href="https://github.com/mallikaakash" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
 transform hover:scale-110 hover:rotate-3
 bg-gradient-to-br from-cyan/30 to-cyan/10
 bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
 p-2 rounded-full 
 shadow-lg hover:shadow-xl
 border border-transparent hover:border-cyan-300/40"><FaGithub size={24} /></Link>
<Link href="https://www.linkedin.com/in/aakash-mallik-82b99423b" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
 transform hover:scale-110 hover:rotate-3
 bg-gradient-to-br from-cyan/30 to-cyan/10
 bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
 p-2 rounded-full 
 shadow-lg hover:shadow-xl
 border border-transparent hover:border-cyan-300/40"><FaLinkedin size={24} /></Link>
<Link href="https://x.com/AakashMallik9" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
 transform hover:scale-110 hover:rotate-3
 bg-gradient-to-br from-cyan/30 to-cyan/10
 bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
 p-2 rounded-full 
 shadow-lg hover:shadow-xl
 border border-transparent hover:border-cyan-300/40"><BsTwitterX size={24} /></Link>
 <Link href="mailto:aakashmallik7777@gmail.com" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
 transform hover:scale-110 hover:rotate-3
 bg-gradient-to-br from-cyan/30 to-cyan/10
 bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
 p-2 rounded-full 
 shadow-lg hover:shadow-xl
 border border-transparent hover:border-cyan-300/40"><FaEnvelope size={24} /></Link>
ß</div>
      </nav>
  )
}

export default Footer