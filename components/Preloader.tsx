import React from 'react';
import { WebqueTechziLogo } from './Icons';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#050505] z-[100] flex items-center justify-center transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isLoading}
      role="status"
    >
      <div className="scale-150" aria-label="Loading Website">
        <WebqueTechziLogo isPreloader={true} />
      </div>
    </div>
  );
};

export default Preloader;
