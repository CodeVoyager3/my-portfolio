import React from 'react';
import Typewriter from '../components/Typewriter.jsx';

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
        <div className='flex flex-col items-center justify-center min-h-screen px-4 py-4 md:py-8 relative overflow-hidden'>
            <style>{keyframes}</style>

            <div className='text-center z-10 mb-8'>
                <h1 className='text-4xl md:text-6xl font-bold text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] tracking-wider mb-4'>
                    WELCOME TO AMRITESH' WORLD
                </h1>
                <div className='text-xl md:text-2xl text-[#ffff55] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]'>
                    <Typewriter texts={messages} />
                </div>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Steve Character */}
                <div className="w-32 h-64 md:w-78 md:h-96 relative z-10 ">
                    <img
                        src="steve1.png"
                        alt="Steve"
                        className="w-full h-full "
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>

            </div>

            <div className='mt-12 max-w-2xl text-center bg-[#000000aa] mt-10 p-6 border-4 border-white text-white'>
                <p className="mb-4 text-lg">I am a dedicated <strong>Full-Stack Developer</strong> focused on building robust and scalable web applications.</p>
                <p className="text-lg">Proficient in the <strong>MERN stack</strong> and committed to collaborative learning.</p>
            </div>
        </div>
    );
}

export default Home;