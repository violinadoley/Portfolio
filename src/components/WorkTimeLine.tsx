'use client'
import React from 'react';
import { FaFlask, FaMicroscope, FaAtom, FaLaptopCode } from 'react-icons/fa';

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

const experiences: WorkExperience[] = [
  {
    company: "SuperKalam (YC W23)",
    position: "AI Research Intern",
    duration: "Aug 2024 - Sep 2024",
    description: "Worked on Advanced Prompt Engineering for evaluating answer copies of UPSC examination.\nFinetuned LLMs incorporating parameter optimization and RLHF concepts.",
    icon: FaLaptopCode
  },
  {
    company: "IBM India",
    position: "Data and AI Intern",
    duration: "May 2024 - Jul 2024",
    description: "Designed a RAG chatbot for sales professionals, integrated with PDF and SQL for real-time customer insights.\nStreamlined interactions through WhatsApp.",
    icon: FaLaptopCode
  },
  {
    company: "IIT Hyderabad",
    position: "Machine Learning Research Intern",
    duration: "Nov 2023 - Jan 2024",
    description: "Implemented VirConv models on the KITTI dataset, achieving a 2% improvement through novel architecture modifications.\nShowcased proficiency in experimental design for autonomous driving.",
    icon: FaMicroscope
  },
  {
    company: "IIT Guwahati",
    position: "Winter Research Intern",
    duration: "Dec 2023 - Feb 2024",
    description: "Enhanced healthcare AI models by applying deep transfer learning to omics datasets.\nImproved equity among ethnic groups through domain adaptation.",
    icon: FaFlask
  },
];

const WorkTimeline: React.FC = () => {
  return (
    <div className="w-full py-8 relative h-fit">
      <div className="flex flex-col relative">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start mb-10 relative">
            {/* Vertical Timeline */}
            <div className="flex flex-col items-center mr-8">
              {/* Icon */}
              <div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex justify-center items-center p-0.5 cursor-pointer z-10"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <exp.icon className="text-cyan-300 text-sm" />
                </div>
              </div>

              {/* Line between icons */}
              {index < experiences.length - 1 && (
                <div className="w-1 bg-cyan-500 h-full"></div>
              )}
            </div>

            {/* Text on the Right */}
            <div className="md:text-sm text-xs text-left text-cyan-300">
              <div className="font-semibold">{exp.company}</div>
              <div className="text-xs text-purple-300">{exp.position}</div>
              <div className="text-xs text-purple-300 mb-2">{exp.duration}</div>
              <div className="text-xs text-white">
                {exp.description.split('\n').map((line, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="whitespace-pre-line">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
