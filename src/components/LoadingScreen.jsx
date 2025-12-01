import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onEnter, isVideoReady }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(prev => Math.min(prev + Math.random() * 10, 100));
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage: "url('/dirt_texture.png')",
                backgroundSize: '64px',
                imageRendering: 'pixelated'
            }}
        >
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]" style={{ fontFamily: "'VT323', monospace" }}>
                    Loading World...
                </h1>
                <div className="w-64 h-4 bg-gray-700 border-2 border-white relative">
                    <div
                        className="h-full bg-[#7cb342] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {progress >= 100 && isVideoReady && (
                <button
                    onClick={onEnter}
                    className="px-8 py-4 text-xl md:text-2xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                    style={{
                        fontFamily: "'VT323', monospace",
                        backgroundColor: '#757575',
                        border: '4px solid',
                        borderColor: '#ffffff #555555 #555555 #ffffff',
                        boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                        textShadow: '2px 2px 0 #000000'
                    }}
                >
                    Enter World
                </button>
            )}
        </div>
    );
};

export default LoadingScreen;
