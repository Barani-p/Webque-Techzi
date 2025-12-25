import React, { useState } from "react";
import ClaimAuditModal from "./ClaimAuditModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 px-4 text-center relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Crafting Digital
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Excellence
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          At WebQue TechZi, we help businesses build powerful websites, smart AI solutions, and winning digital strategies that drive growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Open modal on click */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border border-gray-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
          >
            Get a Free Automation Audit
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1">
            Explore Our Solutions
          </button>
        </div>
      </div>

      {/* Claim Audit Modal */}
      {isModalOpen && <ClaimAuditModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Hero;
