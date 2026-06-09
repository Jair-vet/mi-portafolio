import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Hero } from '../organisms/Hero';
import { AboutMe } from '../organisms/AboutMe';
import { Skills } from '../organisms/Skills';
import { Experience } from '../organisms/Experience';
import { Portfolio } from '../organisms/Portfolio';
import { Certificates } from '../organisms/Certificates';
import { Footer } from '../organisms/Footer';
import { ParallaxSection } from '../templates/ParallaxSection';

export const HomePage: React.FC = () => (
  <>
    <Navbar />

    <main>
      {/* Hero — full screen */}
      <Hero />

      {/* About Me */}
      <ParallaxSection depth="far">
        <AboutMe />
      </ParallaxSection>

      {/* Skills */}
      <ParallaxSection depth="mid">
        <Skills />
      </ParallaxSection>

      {/* Experience */}
      <ParallaxSection depth="far">
        <Experience />
      </ParallaxSection>

      {/* Portfolio */}
      <ParallaxSection depth="mid">
        <Portfolio />
      </ParallaxSection>

      {/* Certificates */}
      <ParallaxSection depth="far">
        <Certificates />
      </ParallaxSection>

      <Footer />
    </main>
  </>
);
