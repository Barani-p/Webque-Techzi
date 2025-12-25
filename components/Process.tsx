import React, { useEffect, useState } from 'react';
import SectionTag from './SectionTag';
import { ProcessIcon1, ProcessIcon2, ProcessIcon3, ProcessIcon4 } from './Icons';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => (
  <div className="flex items-start space-x-6 p-4">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-gray-500 mt-2 text-sm font-semibold">{step}</span>
    </div>
    <div className="flex-1 pt-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
  const steps: ProcessStepProps[] = [
    {
      step: 'STEP 01',
      title: 'Discovery & Audit',
      description:
        'We dive deep into your current workflows to identify the most critical bottlenecks and the best opportunities for high-impact automation.',
      icon: <ProcessIcon1 />,
    },
    {
      step: 'STEP 02',
      title: 'Strategy & Solution Design',
      description:
        'We craft a customized automation blueprint—detailing the technology stack, rollout timeline, and projected ROI.',
      icon: <ProcessIcon2 />,
    },
    {
      step: 'STEP 03',
      title: 'Implementation & Integration',
      description:
        'Our experts build, test, and seamlessly integrate your AI solution—minimizing disruption and ensuring a flawless launch.',
      icon: <ProcessIcon3 />,
    },
    {
      step: 'STEP 04',
      title: 'Optimization & Support',
      description:
        'We monitor performance, provide dedicated support, and continuously refine your automations for maximum efficiency.',
      icon: <ProcessIcon4 />,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const img = document.getElementById('smart-ai-gif');
    if (img) observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-left mb-12">
          <SectionTag>HOW IT WORKS</SectionTag>
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Our process for smarter AI
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              solutions
            </span>
          </h2>
        </div>

        {/* Process Steps + GIF */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10 rounded-2xl transition-all duration-300 hover:border-blue-500/50 transform hover:-translate-y-1"
              >
                <ProcessStep {...step} />
              </div>
            ))}
          </div>

          {/* GIF Image + Description */}
          <div className="text-center">
            <div className="w-full flex items-center justify-center">
              <img
                id="smart-ai-gif"
                src="components/assets/smart-AI.gif"
                alt="Smart AI"
                className={`
                  h-[180px] sm:h-[250px] md:h-[310px] w-auto object-contain rounded-3xl
                  transition-transform duration-500 ease-out
                  hover:scale-102 hover:shadow-2xl
                  active:scale-98
                  ${isVisible ? 'opacity-100 translate-y-0 animate-float' : 'opacity-0 translate-y-8'}
                `}
              />
            </div>

            {/* Inline CSS for smooth scroll + floating animation */}
            <style>
              {`
                #smart-ai-gif {
                  transition: opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.5s ease;
                }

                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }

                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
              `}
            </style>

            <p className="mt-6 text-gray-400 max-w-md mx-auto">
              We help businesses design, build, and deploy intelligent solutions that drive real results.{' '}
              <a
                href="#"
                className="text-blue-400 underline hover:text-blue-300 transition-colors duration-300"
              >
                Contact Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
 