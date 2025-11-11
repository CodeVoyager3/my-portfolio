import React from 'react';
import Typewriter from '../components/TypeWriter';

function Home() {
    const messages = ["Tech Enthusiast", "An OpenSource Contributor", "A FullStack Developer"];
    const keyframes = `
        @keyframes blink-cursor {
            50% { opacity: 0; }
        }
        .animate-blink-cursor {
            animation: blink-cursor 0.75s step-end infinite;
        }
    `;

    return (
        <div className='flex items-center  justify-center min-h-screen px-8 py-16 md:px-20'>
            <div className='h-20'></div>
            <style>{keyframes}</style>
            <div className='flex flex-col items-center  max-w-4xl'>
                <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
                    <div className='text-6xl lg:text-8xl font-bold'>
                        <h1 className='text-center'>Hi! I'm</h1>
                        <h1>Amritesh</h1>
                    </div>
                    
                    <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] shadow-2xl rounded-full flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-60"></div>
                        <img
                            src="https://github.com/CodeVoyager3.png"
                            className='relative w-full h-full object-cover rounded-full'
                            alt="A professional photo of Amritesh"
                        />
                    </div>
                </div>

                <div className='h-16 text-3xl lg:text-4xl text-blue-600 mt-6'>
                    <Typewriter texts={messages} />
                </div>

                <div className='mt-6 text-lg lg:text-xl  space-y-4'>
                    <p>I am a dedicated <strong>Full-Stack Developer</strong> focused on building robust and scalable web applications from front-end interface to back-end architecture.</p>
                    <p>Proficient in the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and foundational web technologies (HTML, CSS, JavaScript). I am committed to collaborative learning and delivering high-quality, efficient code.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;