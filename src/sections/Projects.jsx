import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Collab LM",
      description: "A unified, real-time collaboration platform built with React/Node.js and Web Sockets using Gemini API.",
      github: "https://github.com/CodeVoyager3",
      demo: "/",
      gif: "collablm.jpg",
      icon: "🤖"
    },
    {
      title: "Krishi Rakshak",
      description: "MERN app using CNN to detect crop diseases from images, providing real-time diagnoses.",
      github: "https://github.com/CodeVoyager3/Krishi-Latest",
      demo: "https://krishi-latest.vercel.app/",
      gif: "krishi.jpeg",
      icon: "🌾"
    },
    {
      title: "Meta Drip",
      description: "AR shopping assistant with React, Node.js, and MongoDB using MediaPipe Face Mesh.",
      github: "https://github.com/CodeVoyager3/Meta-Drip-Final",
      demo: "https://meta-drip.vercel.app/",
      gif: "drip.png",
      icon: "👓"
    }
  ]

  return (
    <div className='py-16 flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]'>
        PROJECTS
      </h1>

      <div className='bg-[#c6c6c6] p-4 rounded-sm border-4 border-[#555555] shadow-2xl relative'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='relative group flex flex-col items-center'
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Inventory Slot */}
              <div className='w-64 h-64 md:w-80 md:h-80 bg-[#8b8b8b] border-t-4 border-l-4 border-[#373737] border-b-4 border-r-4 border-[#ffffff] flex items-center justify-center cursor-pointer hover:bg-[#a0a0a0] transition-colors'>
                {project.gif ? (
                  <img src={project.gif} alt={project.title} className="w-[90%] h-[90%] object-cover pixelated border-2 border-[#373737]" />
                ) : (
                  <span className='text-6xl filter drop-shadow-md'>{project.icon}</span>
                )}
              </div>

              {/* Tooltip */}
              <div className={`absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-[#100010] border-2 border-[#2a002a] text-white p-2 text-sm font-minecraft pointer-events-none transition-opacity duration-200 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className='text-[#ffff55] mb-1'>{project.title}</h3>
                <p className='text-[#aaaaaa] mb-2'>{project.description}</p>
              </div>

              {/* Clickable Links Overlay - Always Visible */}
              <div className="flex justify-center gap-2 mt-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="bg-[#d3d3d3] border-2 border-white p-1 hover:bg-white" title="Code">
                  <Github size={24} color="black" />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="bg-[#d3d3d3] border-2 border-white p-1 hover:bg-white" title="Demo">
                  <ExternalLink size={24} color="black" />
                </a>
              </div>
            </div>
          ))}
          {/* Empty Slots to fill grid if needed */}
          {[...Array(3 - projects.length)].map((_, i) => (
            <div key={`empty-${i}`} className='w-64 h-64 md:w-80 md:h-80 bg-[#8b8b8b] border-t-4 border-l-4 border-[#373737] border-b-4 border-r-4 border-[#ffffff]'></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects