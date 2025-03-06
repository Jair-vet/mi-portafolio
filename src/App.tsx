import React from 'react';
import Navbar from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';
import { FeaturedProject } from './components/FeaturedProject';
import { Portfolio } from './components/Portfolio';

const App: React.FC = () => {
    return (
        <div className=' bg-[#1e2326]'>
            <Navbar />
            <main>
                {/* About me */}
                <div className="mt-20 p-5">
                    <AboutMe />
                </div>

                {/* Portafolio */}
                <section id="portfolio" >
                    <Portfolio />
                </section>
                
                {/* Certificates */}
                <section id="certificates" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1A1C1DFF" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,208C560,181,640,107,720,96C800,85,880,139,960,165.3C1040,192,1120,192,1200,213.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                    <Certificates />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1A1C1DFF" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,208C560,181,640,107,720,96C800,85,880,139,960,165.3C1040,192,1120,192,1200,213.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </section>
   
                {/* Footer */}
                <div className="">
                    <Footer />
                </div>
                
            </main>
        </div>
    );
};

export default App;
