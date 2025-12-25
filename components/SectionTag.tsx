import React from 'react';

const SectionTag: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="inline-block bg-[#111111] border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300">
            <span className="text-blue-500">+</span> {children} <span className="text-blue-500">+</span>
        </div>
    );
};

export default SectionTag;