import React from 'react';

function AboutMe() {
    return (
        <div className='mt-[-20px] mb-[30px]'> 
            <div className='text-6xl font-bold text-center mt-15 mb-10'>
                <h1>Tech Stack & Skills</h1>
            </div>
            <div className='max-w-4xl mx-auto px-4 text-lg md:text-xl leading-relaxed'>
                <p className='text-center mb-8'>
                    Hi! I'm <strong>Amritesh Kumar Rai</strong>, a computer science undergraduate student at <strong>Maharaja Agrasen Institute Of Technology</strong>, New Delhi.
                    I'm a <strong>Full-Stack Web Developer</strong> passionate about crafting high-performance, user-centric digital experiences, specializing in the <strong>MERN</strong> stack.
                </p>

                <div className="p-6 rounded-lg">
                    <div className="overflow-x-auto">
                        <div className="overflow-hidden shadow-2xl rounded-2xl border">
                            <table className="min-w-full divide-y">
                                <tbody className="text-sm md:text-base divide-y">
                                    <tr className="transition-colors duration-200 hover:bg-blue-400">
                                        <td className="px-6 py-5 font-extrabold w-1/3 align-top">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">💻</span>
                                                <span>Languages</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 w-2/3 align-top">
                                            <strong>JavaScript (ES6+)</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>C/C++</strong>
                                        </td>
                                    </tr>
                                    <tr className="transition-colors duration-200 hover:bg-blue-400">
                                        <td className="px-6 py-5 font-extrabold w-1/3 align-top">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">🛠️</span>
                                                <span>Frameworks & Libraries</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 w-2/3 align-top">
                                            <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>
                                        </td>
                                    </tr>
                                    <tr className="transition-colors duration-200 hover:bg-blue-400">
                                        <td className="px-6 py-5 font-extrabold w-1/3 align-top">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">🗄️</span>
                                                <span>Databases</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 w-2/3 align-top">
                                            <strong>MongoDB (NoSQL)</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>
                                        </td>
                                    </tr>
                                    <tr className="transition-colors duration-200 hover:bg-blue-400">
                                        <td className="px-6 py-5 font-extrabold w-1/3 align-top">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">⚙️</span>
                                                <span>Tools & Platforms</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 w-2/3 align-top">
                                            <strong>Git</strong>, <strong>GitHub</strong>, <strong>Postman</strong>, <strong>Docker</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;