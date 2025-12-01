
import React from 'react';

function AboutMe() {
    return (
        <div className='py-14 flex flex-col items-center justify-center min-h-screen'>
            <div className='text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] text-center'>
                <h1>ABOUT ME</h1>
            </div>

            <div className='max-w-4xl mx-auto px-4 relative'>
                {/* Book Page Container */}
                <div className='bg-[#f4e4bc] p-8 md:p-12 rounded-sm border-r-8 border-b-8 border-[#8b4513] shadow-2xl relative'>
                    {/* Binding */}
                    <div className='absolute left-0 top-0 bottom-0 w-4 md:w-6 bg-[#5d4037] border-r border-[#3e2723]'></div>

                    <div className='ml-4 md:ml-6 text-[#3e2723] font-minecraft'>
                        <p className='text-lg md:text-xl mb-6 leading-relaxed'>
                            Hi! I'm <strong>Amritesh Kumar Rai</strong>, a computer science undergraduate student at <strong>Maharaja Agrasen Institute Of Technology</strong>, New Delhi.
                            I'm a <strong>Full-Stack Web Developer</strong> passionate about crafting high-performance, user-centric digital experiences, specializing in the <strong>MERN</strong> stack.
                        </p>

                        <div className="border-t-2 border-[#3e2723] pt-6">
                            <h2 className="text-2xl font-bold mb-4 underline decoration-[#3e2723]">SKILLS & TOOLS</h2>

                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="font-bold min-w-[150px]">💻 Languages:</div>
                                    <div>JavaScript (ES6+), HTML5, CSS3, C/C++</div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="font-bold min-w-[150px]">🛠️ Frameworks:</div>
                                    <div>React.js, Node.js, Express.js, Tailwind CSS, Bootstrap</div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="font-bold min-w-[150px]">🗄️ Databases:</div>
                                    <div>MongoDB (NoSQL), PostgreSQL, MySQL</div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="font-bold min-w-[150px]">⚙️ Tools:</div>
                                    <div>Git, GitHub, Postman, Docker</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
