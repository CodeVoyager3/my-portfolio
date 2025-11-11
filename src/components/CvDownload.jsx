import React from 'react'
import { Download } from 'lucide-react';
function CvDownload() {
  return (
    <div className="fixed bottom-6 animate-bounce right-6 z-50 group">
      <a
        href="/Amritesh_Kumar_Rai_CV.pdf" 
        download
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg  hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
      >
        <Download size={22} />
      </a>

      {/* Tooltip */}
      <span className="absolute right-14 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md transition-opacity duration-300 whitespace-nowrap">
        Download CV
      </span>
    </div>
  )
}

export default CvDownload
