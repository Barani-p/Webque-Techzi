import React from 'react';
import SectionTag from './SectionTag';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTag>ABOUT US</SectionTag>
        <p className="text-3xl md:text-4xl leading-snug text-gray-300 mt-6">
         At Webque Techzi, we merge cutting-edge technology with real-world processes to deliver impactful AI solutions. Our experts simplify complexity, boost efficiency, and drive measurable business growth from day one.
        </p>
      </div>
    </section>
  );
};

export default About;