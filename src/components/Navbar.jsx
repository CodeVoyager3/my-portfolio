
import React from 'react';

function Navbar({ scrollToSection, homeRef, AboutMeRef, projectsRef, connectRef }) {
    const navItems = [
        { name: 'HOME', ref: homeRef, icon: '/home.png' },
        { name: 'PROJECTS', ref: projectsRef, icon: '/axe.png' },
        { name: 'ABOUT', ref: AboutMeRef, icon: '/book.png' },
        { name: 'CONTACT', ref: connectRef, icon: '/envelope.png' }
    ];

    const audioRef = React.useRef(new Audio('/click.mp3'));

    const playClickSound = () => {
        const audio = audioRef.current;
        audio.currentTime = 0.5;
        audio.play().catch(e => console.error("Audio play failed:", e));
    };

    return (
        <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
            {/* Hotbar Container with Steel Gradient Border */}
            <div
                className="p-1 flex items-end space-x-1 pointer-events-auto bg-[#1e1e1e]/80 backdrop-blur-sm"
                style={{
                    border: '3px solid transparent',
                    borderImage: 'linear-gradient(to bottom, #d4d4d4, #5a5a5a) 1'
                }}
            >
                {navItems.map((item) => (
                    <div key={item.name} className="flex flex-col items-center group">
                        {/* Slot with Steel Gradient Border */}
                        <button
                            onClick={() => {
                                playClickSound();
                                scrollToSection(item.ref);
                            }}
                            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#8b8b8b] hover:bg-[#a0a0a0] active:bg-[#707070] flex items-center justify-center transition-colors duration-100"
                            title={item.name}
                            style={{
                                border: '3px solid transparent',
                                borderImage: 'linear-gradient(to bottom right, #e0e0e0, #707070, #404040) 1'
                            }}
                        >
                            {/* Inner Shadow/Highlight for depth */}
                            <div className="absolute inset-0 border-t-2 border-l-2 border-[#ffffff]/30 border-b-2 border-r-2 border-[#000000]/30 pointer-events-none"></div>

                            {/* Icon */}
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 pixelated drop-shadow-md group-hover:scale-110 transition-transform duration-100"
                            />
                        </button>

                        {/* Label */}
                        <span className="mt-1 text-xs sm:text-sm md:text-base text-white font-minecraft text-shadow-minecraft tracking-wide bg-black/50 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
