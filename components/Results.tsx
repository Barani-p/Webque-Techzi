// import React from 'react';
// import SectionTag from './SectionTag';
// import { ResultCard1, ResultCard2, ResultCard3 } from './Icons';

// const ResultCard: React.FC<{ title: string; image: React.ReactNode; }> = ({ title, image }) => (
//     <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">
//         <h3 className="text-xl font-semibold mb-4">{title}</h3>
//         <div className="bg-black rounded-xl aspect-video flex items-center justify-center p-4">
//             {image}
//         </div>
//     </div>
// );

// const Results: React.FC = () => {
//     return (
//         <section className="py-20 px-4">
//             <div className="max-w-7xl mx-auto text-center">
//                 <SectionTag>REAL IMPACT</SectionTag>
//                 <h2 className="text-4xl md:text-5xl font-bold mt-6">
//                     Delivering measurable results
//                     <br />
//                     that drive <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">growth</span>
//                 </h2>
//                 <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
//                    <ResultCard title="Increase in User Engagement Using Custom GPT Chatbots." image={<ResultCard1 />} />
//                    <ResultCard title="Delivering Results" image={<ResultCard2 />} />
//                    <ResultCard title="See How Our AI driven Solutions" image={<ResultCard3 />} />
//                 </div>
//                 <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm text-gray-400">
//                     <p>We believe results are more than just numbers they're proof of purpose, innovation, & value delivered. Every project we take on is built with performance in mind.</p>
//                     <p>Crafting intate interface by intelligence for</p>
//                     <p>Crafting intuitive, user-first interfaces by intelligence for smarter, faster, and more personalized digital artificial intelligence experiences.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Results;