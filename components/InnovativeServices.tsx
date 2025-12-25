import React from 'react';
import SectionTag from './SectionTag';
import { InnovativeServicesGraphic, CheckIcon } from './Icons';

const FeaturePill: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="flex items-center space-x-2 bg-[#111111] border border-white/10 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-0.5 cursor-pointer">
        <CheckIcon />
        <span className="text-gray-300 text-sm">{children}</span>
    </div>
);

const InnovativeServices: React.FC = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-blue-500/50 transform hover:-translate-y-1">
                    <h3 className="text-2xl font-semibold mb-6">We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences that inspire.</h3>
                    <InnovativeServicesGraphic />
                </div>
                <div className="text-left">
                    <SectionTag>WHAT WE DO</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Innovative AI services, real-world <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">results</span>
                    </h2>
                    <p className="text-gray-400 mt-6">
                        We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <FeaturePill>Computer Vision</FeaturePill>
                        <FeaturePill>AI Integration</FeaturePill>
                        <FeaturePill>Ongoing Support</FeaturePill>
                        <FeaturePill>AI Strategy</FeaturePill>
                        <FeaturePill>Custom AI Development</FeaturePill>
                    </div>
                    <button className="mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InnovativeServices;