import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Connect from './sections/Contact';
import CvDownload from './components/CvDownload';
import React, { useRef } from 'react';

function App() {
    const homeRef = useRef(null);
    const AboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const connectRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <Navbar
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                AboutMeRef={AboutMeRef}
                projectsRef={projectsRef}
                connectRef={connectRef}
            />

            <main>
                {/* ADDED scroll-mt-24 to offset for the sticky Navbar */}
                <section ref={homeRef} className='pt-20px scroll-mt-24' id="home">
                    <Home />
                </section>
                <div className='w-full border-t-2 border-dashed border-gray-400 my-4'></div>
                <section ref={AboutMeRef} id="AboutMe" className="pt-20 scroll-mt-24">
                    <AboutMe />
                </section>
                <div className='w-full border-t-2 border-dashed border-gray-400 my-4'></div>
                <section ref={projectsRef} id="projects" className="pt-20 scroll-mt-24">
                    <Projects />
                </section>
                <div className='w-full border-t-2 border-dashed border-gray-400 my-4'></div>
                <section ref={connectRef} id="Connect" className="pt-20 scroll-mt-24">
                    <Connect />
                </section>
            </main>
            <CvDownload />
        </>
    );
}

export default App;