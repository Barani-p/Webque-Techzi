import React from 'react';
import SectionTag from './SectionTag';

const CTA: React.FC = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-3xl p-12 text-center">
                <SectionTag>OUR FACTS</SectionTag>
                <h2 className="text-4xl md:text-5xl font-bold mt-6">
                    Ready to Build a Smarter, Faster Business <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">with AI?</span>
                </h2>
                <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                    Ready to innovate with AI model? Whether you have an idea, a challenge, or a full roadmap we'd love to help bring it to life.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-transparent border border-gray-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1">
                        Get Started Today
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1">
                        Send A Message
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;