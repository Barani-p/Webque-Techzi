import React from 'react';
import SectionTag from './SectionTag';
import AnimatedNumber from './AnimatedNumber';

const WhyCard: React.FC<{ title: string; metric: string; description: string; }> = ({ title, metric, description }) => {
  const numericValue = parseInt(metric) || 0;
  const suffix = metric.replace(String(numericValue), '').trim();
    
  return (
    <div className="bg-[#111111]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
      <p className="text-gray-400">{title}</p>
      <AnimatedNumber 
        target={numericValue} 
        suffix={suffix} 
        className="text-5xl font-bold mt-2"
        duration={1500}
      />
      <div className="bg-black/50 border border-white/10 rounded-2xl p-6 mt-6">
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTag>WHY US</SectionTag>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 max-w-3xl mx-auto">
          Why leading brands trust us to deliver smart <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">AI solutions</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          <WhyCard
            title="Years of Experience"
            metric="3+"
            description="Every solution is designed to drive quantifiable gains—whether that’s time saved, cost reduced, or revenue increased."
          />
          <WhyCard
            title="Projects Successfully Delivered"
            metric="16+"
            description="Our team blends process mastery with AI know-how, ensuring we apply the right technology to your biggest challenges."
          />
          <WhyCard
            title="Client Satisfaction Rate"
            metric="100%"
            description="We make enterprise-grade automation accessible, affordable, and easy to manage—so even small teams can compete at scale."
          />
        </div>
        <div className="mt-12 flex justify-center items-center space-x-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full">FREE</span>
            <p className="text-gray-300">Let's make something great work together. <a href="#" className="text-blue-400 font-semibold underline hover:text-blue-300 transition-colors duration-300">Get Free Quote</a></p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;