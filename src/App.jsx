import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Connect from './sections/Contact';
import CvDownload from './components/CvDownload';
import LoadingScreen from './components/LoadingScreen';
import React, { useRef, useState } from 'react';

function App() {
    const homeRef = useRef(null);
    const AboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const connectRef = useRef(null);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoReady(true);
    };

    const handleEnterWorld = () => {
        setIsLoaded(true);
    };

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
            {!isLoaded && (
                <LoadingScreen onEnter={handleEnterWorld} isVideoReady={isVideoReady} />
            )}

            <div className={`relative ${!isLoaded ? 'h-screen overflow-hidden' : ''}`}>

                {/* Fixed Video Background */}
                <div className="fixed top-0 left-0 w-full h-full z-[-1]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onLoadedData={handleVideoLoad}
                    >
                        <source src="/minecraft.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                </div>

                {/* Navbar */}
                {isLoaded && (
                    <Navbar
                        scrollToSection={scrollToSection}
                        homeRef={homeRef}
                        AboutMeRef={AboutMeRef}
                        projectsRef={projectsRef}
                        connectRef={connectRef}
                    />
                )}


                {isLoaded && (
                    <main className="relative z-10 flex flex-col items-center w-full">

                        <section ref={homeRef} id="home" className="w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40">
                            <div className="w-full max-w-6xl mx-auto px-4">
                                <Home />
                            </div>
                        </section>

                        <section ref={projectsRef} id="projects" className="w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40">
                            <div className="w-full max-w-6xl mx-auto px-4">
                                <Projects />
                            </div>
                        </section>

                        <section ref={AboutMeRef} id="AboutMe" className="w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40">
                            <div className="w-full max-w-6xl mx-auto px-4">
                                <AboutMe />
                            </div>
                        </section>

                        <section ref={connectRef} id="Connect" className="w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-20">
                            <div className="w-full max-w-6xl mx-auto px-4">
                                <Connect />
                            </div>
                        </section>

                    </main>
                )}

                {isLoaded && <CvDownload />}
            </div>
        </>
    );
}

export default App;