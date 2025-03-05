import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { SkillModal } from './SkillModal';

const Navbar: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "sobremi", "portfolio", "certificates"];
            let currentSection = null;
    
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    useEffect(() => {
        const typed = new Typed('#typed-text', {
            strings: ['Full stack'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 999,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="fixed bg-[#1e2326] w-full top-0 left-0 z-50">
            <header className="max-w-[1100px] mx-auto flex justify-between items-center px-4 py-5">
                <div className="font-mono text-[36px] text-greenBorder">
                    <span id="typed-text" className="font-mono text-[#1CB698]"></span>
                </div>
                <nav className={`flex ${menuVisible ? 'block' : 'hidden'} md:flex`}>
                    <ul className="flex list-none">
                        <li className={`relative no-underline p-3 mx-1 text-[#1CB698] ${activeSection === "inicio" ? "border-b-4 border-[#1CB698] animate-pulse" : ""}`}>
                            <a href="#inicio">INICIO</a>
                        </li>
                        <li className={`relative no-underline p-3 mx-1 text-[#1CB698] ${activeSection === "sobremi" ? "border-b-4 border-[#1CB698] animate-pulse" : ""}`}>
                            <a href="#sobremi">ABOUT ME</a>
                        </li>
                        <li className={`relative no-underline p-3 mx-1 text-[#1CB698] ${activeSection === "portfolio" ? "border-b-4 border-[#1CB698] animate-pulse" : ""}`}>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className={`relative no-underline p-3 mx-1 text-[#1CB698] ${activeSection === "certificates" ? "border-b-4 border-[#1CB698] animate-pulse" : ""}`}>
                            <a href="#certificates">CERTIFICATES</a>
                        </li>

                        <li className="no-underline p-3 mx-1 text-[#1CB698]">
                            <button className="cursor-pointer" onClick={() => setIsModalOpen(true)}>SKILLS</button>
                        </li>
                    </ul>
                </nav>
                <button className="md:hidden text-white" onClick={() => setMenuVisible(!menuVisible)}>
                    ☰
                </button>
            </header>

            <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Navbar;
