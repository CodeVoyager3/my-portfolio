import ToggleTheme from './ToggleTheme';

function Navbar({ scrollToSection, homeRef, AboutMeRef, projectsRef, connectRef }) {
    return (
        <nav className="bg-white dark:bg-neutral-800 text-xl shadow-lg sticky top-4 z-50 w-auto mx-auto max-w-4xl h-16 rounded-[50px] overflow-hidden flex items-center backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
            <div className="px-2 sm:px-4 lg:px-8 w-full">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-6">
                        <a 
                            href="#home" 
                            onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }} 
                            className="text-gray-700 ml-3 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a 
                            href="#AboutMe" 
                            onClick={(e) => { e.preventDefault(); scrollToSection(AboutMeRef); }} 
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold relative group"
                        >
                            AboutMe
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a 
                            href="#projects" 
                            onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }} 
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold relative group"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a 
                            href="#connect" 
                            onClick={(e) => { e.preventDefault(); scrollToSection(connectRef); }} 
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    <div className="ml-3">
                        <ToggleTheme />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;