import React from 'react';
import SectionTag from './SectionTag';

const ServiceCard: React.FC<{ title: string; description: string; imageSrc: string; }> = ({ title, description, imageSrc }) => (
    <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-4 flex-grow">{description}</p>
        <div className="mt-8 h-40 bg-black rounded-lg flex items-center justify-center">
            <img src={imageSrc} alt={title} className="h-full object-contain" />
        </div>
    </div>
);

const Pill: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="bg-[#111111] border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 flex items-center space-x-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-0.5 cursor-pointer">
        <span className="text-blue-500">+</span>
        <span>{children}</span>
    </div>
);

const Services: React.FC = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <SectionTag>OUR SERVICES</SectionTag>
                <h2 className="text-4xl md:text-5xl font-bold mt-6">
                    Our Services
                    <br />
                   <span className="text-sm md:text-base bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
  Comprehensive digital solutions to elevate your business.
</span>

                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                    <ServiceCard 
                        title="Website & App Development"
                        description="We craft fast, responsive websites and applications tailored to your business needs.
Our solutions are secure, scalable, and user-friendly, delivering digital experiences that drive growth and engagement."
                        imageSrc="./components\assets\giphy-1--unscreen.gif"
                    />
                    <ServiceCard 
                        title="Website Maintenance"
                        description="We keep your website secure, fast, and up-to-date.
Services include: Updates & bug fixes, SEO optimization, CRM support, performance monitoring, and security backups."
                        imageSrc="./components/assets/maintenance.gif"
                    />
                    <ServiceCard 
                        title="Custom AI Chatbot Development"
                        description="Deliver instant, around-the-clock support. Our bots qualify leads, answer FAQs, and resolve issues—boosting satisfaction and conversions."
                        imageSrc="./components\assets\chat.gif"
                    />
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Pill>UI/UX Design</Pill>
                    <Pill>Website Design</Pill>
                    <Pill>Chatbot Design</Pill>
                    <Pill>AI SEO Optimization</Pill>
                    <Pill>Personalized Experiences</Pill>
                    <Pill>Generative Branding</Pill>
                    <Pill>WhatsApp Chatbot</Pill>
                </div>
            </div>
        </section>
    );
};

export default Services;
