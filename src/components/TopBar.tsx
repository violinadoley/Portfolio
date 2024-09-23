'use client'
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/pfp.jpeg';
import { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className=" bg-black bg-opacity-50 p-4 md:py-6 h-20 rounded-3xl backdrop-blur-sm hover:border-[#c8acd6] transition-colors duration-300 w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-colitems-center justify-between h-full">
        <div className="flex flex-row items-center justify-center">
        <div className='bg-gray-400 rounded h-12 w-12 mr-2'>
          <Image src={profilePic} alt="logo" width={48} height={48}  className="object-cover w-full h-full object-top rounded " />
           </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#c8acd6]">
          {/* <span className="sm:hidden">AM</span> */}
          <div className="flex-row inline">
            <div>Violina Doley</div> 
          </div>
        </h2>
        </div>
        <div className="flex items-center">

          
          {/* Social links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="https://github.com/violinadoley" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaGithub size={24} /></Link>
            <Link href="https://www.linkedin.com/in/violinadoley/" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaLinkedin size={24} /></Link>
            <Link href="https://x.com/ViolinaDoley?t=yKz-3_57X5HI1EXEXzJDRw&s=09" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><BsTwitterX size={24} /></Link>
             <Link href="mailto:violinadoley2@gmail.com" className="text-cyan-200 hover:text-cyan-200 transition-all duration-300 
             transform hover:scale-110 hover:rotate-3
             bg-gradient-to-br from-cyan/30 to-cyan/10
             bg-opacity-70 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
             p-2 rounded-full 
             shadow-lg hover:shadow-xl
             border border-transparent hover:border-cyan-300/40"><FaEnvelope size={24} /></Link>

          </div>
        </div>
      </div>
    
    </div>
  );
}