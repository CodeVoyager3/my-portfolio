import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: "Collab LM",
      description: "CollabLM: A unified, real-time collaboration platform built with React/Node.js and Web Sockets that uses the Gemini API to generate AI-Powered Knowledge Graphs and integrated insights from shared resources and team discussions, significantly boosting productivity.",
      github: "https://github.com/CodeVoyager3",
      demo: "/",
      gif: "/gifs/collab.gif"
    },
    {
      title: "Krishi Rakshak",
      description: "Krishi Rakshak: A full-stack MERN application leveraging computer vision (CNN) to detect crop diseases from images, providing farmers with real-time diagnoses and mitigation strategies.",
      github: "https://github.com/CodeVoyager3/Krishi-Latest",
      demo: "https://krishi-latest.vercel.app/",
      gif: "/gifs/krishi.gif"
    },
    {
      title: "Meta Drip",
      description: "Meta Drip: A Virtual Augmented Reality (AR) shopping assistant built with React, Node.js, and MongoDB that leverages MediaPipe Face Mesh for real-time virtual try-on of accessories like eyeglasses and sunglasses.",
      github: "https://github.com/CodeVoyager3/Meta-Drip-Final",
      demo: "https://meta-drip.vercel.app/",
      gif: "/gifs/meta.gif"
    }
  ]

  return (

    <div className='mt-[-20px]'>

      <div className='text-6xl font-bold text-center mt-15 mb-16'>
        <h1>Projects</h1>
      </div>

      <div className='max-w-5xl mx-auto px-6 pb-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full'
            >
              <div className='h-48 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden'>
                {project.gif ? (
                  <img
                    src={project.gif}
                    alt={`${project.title} demo`}
                    className='h-48 w-full object-cover'
                  />
                ) : (
                  <div className='h-48 w-full flex items-center justify-center text-sm text-gray-500'>
                    No preview available
                  </div>
                )}
              </div>

              <div className='p-6 flex flex-col flex-1'>
                <div>
                  <h3 className='text-2xl font-bold  mb-3'>
                    {project.title}
                  </h3>

                  <p className=' text-sm mb-6 leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                <div className='flex mt-auto gap-4'>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2  hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  >
                    <Github size={20} />
                    <span className='text-sm font-medium'>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2  hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  >
                    <ExternalLink size={20} />
                    <span className='text-sm font-medium'>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects