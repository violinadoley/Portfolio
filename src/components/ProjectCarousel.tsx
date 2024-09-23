

"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
}


const projects: Project[] = [
    {
        title: "AI based Predictive Maintenance",
        description: "Developed an LSTM model using time series data with a recall of 89.09% and an accuracy of 90.96% to predict hard disk failures and an unsupervised model using Autoencoder with an accuracy of 98.73% to detect anomalies.",
        link: "https://github.com/violinadoley/AI-Based-Predictive-Maintenance",
        type: "Deep Learning"
      },
  {
    title: "IPV6 deployment in NITK",
    description: "Implemented DNS over TLS (DoT) using BIND9, successfully configuring a robust and highly secure DNS resolution system that enhances privacy and overall security by encrypting DNS queries and responses on a Linux environment.",
    link: "https://github.com/violinadoley/IPV6-deployment-using-Bind9/tree/main",
    type: "Networking"
  }
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const project = projects[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-full  mx-auto relative h-full px-0 sm:px-12"> {/* Added horizontal padding */}
        <div className="bg-black bg-opacity-30 rounded-3xl h-full overflow-hidden backdrop-blur-sm transition-all duration-300 p-4 pl-12 sm:p-6 ">
          <div className="flex flex-row items-center justify-between space-x-4"> {/* Added space between items */}
            <h3 className="text-sm md:text-xl font-semibold text-cyan-300 truncate flex-1">{project.title}</h3> {/* Added truncate and flex-1 */}
            <Link
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-cyan-300 transition-all duration-300 text-xs
                         bg-gradient-to-br from-cyan-500/30 to-cyan-500/10
                         px-4 py-2 rounded-full whitespace-nowrap
                         border border-transparent hover:border-cyan-300/40
                         shadow-lg hover:shadow-xl hover:scale-105"
            >
              View 
            </Link>
          </div>
          <p className="text-purple-300 text-xs mb-4">{project.type}</p>
          <p className="text-white text-sm">{project.description}</p>
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-l-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-r-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronRight />
        </button>
        <div className="absolute -bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-cyan-300' : 'bg-cyan-500/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;