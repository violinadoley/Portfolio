import { MdOutlineFileDownload } from 'react-icons/md';
import ProjectCarousel from "@/components/ProjectCarousel";
import { FaPython, FaCuttlefish, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiTensorflow, SiKeras, SiFlask, SiGit, SiPandas, SiNumpy, SiGooglecloud, SiPytorch } from 'react-icons/si';
import TopBar from "@/components/TopBar";
import WorkTimeline from "@/components/WorkTimeLine";
import Link from "next/link";
import React from "react";
import Footer from '@/components/Footer';

const programmingIcons = [
  { Icon: FaPython, name: 'Python' },
  { Icon: FaCuttlefish, name: 'C' },
  { Icon: SiCplusplus, name: 'C++' },
  { Icon: FaDatabase, name: 'SQL' },
];

const frameworkIcons = [
  { Icon: SiTensorflow, name: 'Tensorflow' },
  { Icon: SiPytorch, name: 'Pytorch' },
  { Icon: SiKeras, name: 'Keras' },
  { Icon: SiFlask, name: 'Flask' },
];

const toolsIcons = [
  { Icon: SiMysql, name: 'MySQL' },
  { Icon: SiGit, name: 'Git' },
  { Icon: SiPandas, name: 'Pandas' },
  { Icon: SiNumpy, name: 'Numpy' },
  { Icon: SiGooglecloud, name: 'GCP' },
];

export default function Home() {
  
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 animate-gradient-shift overflow-x-hidden">
      <TopBar />
      
      <main className="flex flex-col items-center w-full mt-24 px-4">
        <div className="flex flex-col items-center w-full ">
          <Footer />
        </div>
        
        {/* Stack boxes vertically */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* About Me Box */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-3xl backdrop-blur-sm border border-gray-600 hover:border-gray-300 transition-colors duration-300">
            <div className="flex flex-row items-center justify-between mb-4">
              <h2 className="text-xl md:text-3xl font-semibold text-gray-200">Hello</h2>
              <Link href="/Violina_Doley_Resume.pdf" target="_blank">
                <span className="text-white hover:text-white transition-all duration-300 text-sm flex flex-row 
                transform hover:scale-105 w-fit justify-center items-center
                bg-gradient-to-br from-blue-600 to-blue-400
                bg-opacity-60 hover:bg-opacity-30 backdrop-filter backdrop-blur-md
                p-2 rounded-full 
                shadow-lg hover:shadow-xl
                border border-transparent hover:border-blue-300"> 
                Resume<span className="text-white pl-2 hidden md:block"> <MdOutlineFileDownload size={20} /></span></span>
              </Link>
            </div>
            <p className="text-gray-300 text-sm">
            I am a final year undergraduate my B.Tech in Computer Science and Engineering at National Institute of Technology Karnataka, Surathkal, along with a Focus Area in Artificial Intelligence and Machine Learning
              I am a passionate researcher, aspiring developer, and contemplative writer from India. My primary ambition is to delve deep into the theoretical foundations of AI and Computer Vision while also exploring the realm of power-efficient AI.  
              <br /><br />
              My interests span a broad spectrum, including machine learning, mathematics, astronomy, economics, literature, anime, manga, and manhwa. I thoroughly enjoy an insightful conversation on any topic... be it on the narrative depth of <span className="text-blue-400">Attack on Titan</span> or on the philosophical underpinnings of the universe or practically anything else.<br /><br />
              <br /><br />
            </p>
          </div>

          {/* Projects Box */}
          <div className="bg-gray-800 bg-opacity-70 rounded-2xl backdrop-blur-sm border border-gray-600 hover:border-gray-300 transition-colors duration-300 overflow-hidden p-4 h-80 lg:h-full">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">Projects</h2>
            <div className="flex items-center justify-center h-5/6">
              <ProjectCarousel />
            </div>
          </div>

          {/* Skills Box */}
          <div className="bg-gray-800 bg-opacity-70 p-4 rounded-3xl backdrop-blur-sm border border-gray-600 hover:border-gray-300 transition-colors duration-300 mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">Skills</h2>
            {[
              { category: 'Programming Languages', icons: programmingIcons },
              { category: 'Frameworks/Libraries', icons: frameworkIcons },
              { category: 'Tools', icons: toolsIcons },
            ].map(({ category, icons }) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg md:text-l font-semibold text-blue-400 mb-3">{category}</h3>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {icons.map(({ Icon, name }, index) => (
                    <React.Fragment key={name}>
                      {index > 0 && <span className="text-blue-500/50">•</span>}
                      <div className="group relative flex flex-col items-center justify-center space-y-2">
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center
                                        p-1 rounded-full backdrop-filter backdrop-blur-sm
                                        border border-blue-500/30 hover:border-blue-300/50 
                                        transition-all duration-300 hover:scale-110">
                          <Icon 
                            className="text-blue-300 group-hover:text-blue-100 transition-colors duration-300 
                                       filter drop-shadow-glow" 
                            size={30} 
                          />
                        </div>
                        <span className="text-blue-300 group-hover:text-blue-100 transition-colors duration-300 text-xs">{name}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Box */}
          <div className="bg-gray-800 bg-opacity-70 p-4 rounded-3xl backdrop-blur-sm border border-gray-600 hover:border-gray-300 transition-colors duration-300 mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 pb-0">Experience</h2>
            <div className="flex items-center justify-center h-3/4 py-12 px-4 md:px-8">
              <WorkTimeline />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
