import React from 'react';
import Navbar from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';

const WaveDivider: React.FC<{ flip?: boolean }> = ({ flip = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{ transform: flip ? 'scaleY(-1)' : undefined, display: 'block' }}
  >
    <path
      fill="#1A1C1D"
      fillOpacity={1}
      d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,208C560,181,640,107,720,96C800,85,880,139,960,165.3C1040,192,1120,192,1200,213.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    />
  </svg>
);

const App: React.FC = () => {
  return (
    <div className="bg-[#1e2326]">
      <Navbar />
      <main>
        <div id="inicio" className="mt-20 p-5">
          <AboutMe />
        </div>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="certificates">
          <WaveDivider />
          <Certificates />
          <WaveDivider flip />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
