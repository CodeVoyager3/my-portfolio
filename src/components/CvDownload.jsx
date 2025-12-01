import React from 'react'
import { Download } from 'lucide-react';

function CvDownload() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="/Amritesh_Kumar_Rai_CV.pdf"
        download
        className="relative flex items-center justify-center w-14 h-14 bg-[#7c7c7c] hover:bg-[#8c8c8c] active:bg-[#6c6c6c] transition-colors duration-100"
        style={{
          border: '3px solid',
          borderColor: '#ffffff #3b3b3b #3b3b3b #ffffff', // Light top/left, Dark bottom/right
          boxShadow: '4px 4px 0 rgba(0,0,0,0.5)'
        }}
      >
        <Download size={28} className="text-white drop-shadow-md" />
      </a>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white text-xs font-minecraft text-shadow-minecraft tracking-wide bg-[#1e1e1e]/90 border-2 border-white px-2 py-1 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Download CV
      </span>
    </div>
  )
}

export default CvDownload
