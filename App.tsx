import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
// import Results from './components/Results';
import CTA from './components/CTA';
import InnovativeServices from './components/InnovativeServices';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import AnimatedSection from './components/AnimatedSection';
import Preloader from './components/Preloader';
import CustomCursor from "./components/CustomCursor";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Preloader duration: 3 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="bg-[#050505] text-white font-sans">
      <Preloader isLoading={isLoading} />
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition duration-300"
          style={{
            background: `radial-gradient(350px at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(120, 119, 198, 0.15), transparent 80%)`
          }}
        ></div>
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        <div className="relative z-10">
          <Header />
          <main>
            <div id="home"><Hero /></div>
            <AnimatedSection></AnimatedSection>
            <div id="about-us"><AnimatedSection><About /></AnimatedSection></div>
            <AnimatedSection><Stats /></AnimatedSection>
            <div id="services"><AnimatedSection><Services /></AnimatedSection></div>
            <AnimatedSection><Process /></AnimatedSection>
            <AnimatedSection><WhyUs /></AnimatedSection>
            {/* <AnimatedSection><Results /></AnimatedSection> */}
            <AnimatedSection><CTA /></AnimatedSection>
            <AnimatedSection><InnovativeServices /></AnimatedSection>
             <CustomCursor />
          </main>
          <div id="contact-us"><Footer /></div>
          <FloatingActionButton />
        </div>
      </div>
    </div>
  );
};

export default App;