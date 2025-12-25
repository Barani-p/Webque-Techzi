import React from 'react';

type WebqueTechziLogoProps = {
  isPreloader?: boolean;
  className?: string; // ✅ new prop
};

export const WebqueTechziLogo: React.FC<WebqueTechziLogoProps> = ({
  isPreloader = false,
  className = '',
}) => (
  <div className={`font-sans group cursor-pointer ${className}`}>
    <div
      className={`text-white text-3xl font-extrabold tracking-tighter ${
        isPreloader ? 'animate-slide-in-down' : ''
      }`}
      style={isPreloader ? { animationDelay: '0.1s', opacity: 0 } : {}}
    >
      WEBQUE
    </div>
    <div className="flex items-center -mt-1">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className={`text-blue-500 mr-1 transition-transform duration-300 group-hover:scale-110 ${
          isPreloader ? 'animate-scale-in' : ''
        }`}
        fill="currentColor"
        style={isPreloader ? { animationDelay: '0.3s', opacity: 0 } : {}}
      >
        <path d="M12 2L1 21h22L12 2z" />
      </svg>
      <div
        className={`text-white text-2xl font-semibold tracking-tight ${
          isPreloader ? 'animate-slide-in-up' : ''
        }`}
        style={isPreloader ? { animationDelay: '0.2s', opacity: 0 } : {}}
      >
        techzi
      </div>
    </div>
  </div>
);

// ---- Other icons ----

export const TenWebLogo = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM4 8.5l8 4 8-4M12 13.5v8" />
  </svg>
);

export const TypewiseLogo = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M3 3h18v18H3z" opacity=".3" />
    <path d="M10 10h4v4h-4zm-6 6h4v4H4zm12 0h4v4h-4zm-6-12h4v4h-4z" />
  </svg>
);

export const LavenderLogo = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0" />
  </svg>
);

export const WritesonicLogo = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z" />
    <path d="M12 12l-2 3h4l-2-3z" opacity=".5" />
  </svg>
);

// Chart Icons
export const ChartIcon1 = () => (
  <svg
    className="w-6 h-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 12l3-3 3 3 4-4M8 21v-4M12 21v-2M16 21v-4"
    />
  </svg>
);
export const ChartIcon2 = () => (
  <svg
    className="w-6 h-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 10h16M4 14h16M4 18h16"
    />
  </svg>
);
export const ChartIcon3 = () => (
  <svg
    className="w-6 h-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
export const ChartIcon4 = () => (
  <svg
    className="w-6 h-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14v3m4-6v6m4-3v3M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

// Process Icons
export const ProcessIcon1 = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
export const ProcessIcon2 = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s0 0 0 0"
    />
    <ellipse cx="12" cy="7" rx="8" ry="4" />
  </svg>
);
export const ProcessIcon3 = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
export const ProcessIcon4 = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// Results
export const ResultCard1 = () => (
  <img
    src="https://i.imgur.com/kY1yUoZ.png"
    className="max-h-full"
    alt="Result 1"
  />
);
export const ResultCard2 = () => (
  <img
    src="https://i.imgur.com/qE4Jk3e.png"
    className="max-h-full"
    alt="Result 2"
  />
);
export const ResultCard3 = () => (
  <img
    src="https://i.imgur.com/Y4Q5V0G.png"
    className="max-h-full"
    alt="Result 3"
  />
);

export const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const InnovativeServicesGraphic = () => (
  <img
    src="./components\assets\Gemini_Generated_Image_steyxvsteyxvstey.png"
    className="w-full"
    alt="Innovative Services"
  />
);

// Social Icons
export const FacebookIcon = () => (
  <svg className="w-15 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.24 10.36h-1.61v4.8h-1.97v-4.8h-1.2v-1.78h1.2v-1.25c0-1.07.5-2.79 2.79-2.79h1.5v1.78h-.91c-.37 0-.44.18-.44.45v1.81h1.36l-.2 1.78z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg className="w-15 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.42.46-.65.25-1.13.59-1.62 1.08-.49.49-.83.97-1.08 1.62-.24.63-.41 1.36-.46 2.42C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.46 2.42.25.65.59 1.13 1.08 1.62.49.49.97.83 1.62 1.08.63.24 1.36.41 2.42.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.46.65-.25 1.13.59 1.62-1.08.49-.49.83-.97 1.08-1.62.24-.63.41-1.36.46-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.46-2.42-.25-.65-.59-1.13-1.08-1.62-.49-.49-.97-.83-1.62-1.08-.63-.24-1.36-.41-2.42-.46C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06 1.03.05 1.5.2 1.81.33.4.15.69.36.98.65.29.29.5.58.65.98.13.31.28.78.33 1.81.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.03-.2 1.5-.33 1.81-.15.4-.36.69-.65.98-.29.29-.58.5-.98-.65-.31.13-.78.28-1.81.33-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.03-.05-1.5-.2-1.81-.33-.4-.15-.69-.36-.98-.65-.29-.29-.5-.58-.65-.98-.13-.31-.28-.78-.33-1.81-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.05-1.03.2-1.5.33-1.81.15-.4.36.69.65.98.29-.29.58-.5.98-.65.31-.13.78-.28 1.81.33C9.01 3.81 9.33 3.8 12 3.8zm0 4.3c-2.17 0-3.9 1.73-3.9 3.9s1.73 3.9 3.9 3.9 3.9-1.73 3.9-3.9-1.73-3.9-3.9-3.9zm0 6c-1.21 0-2.2-0.99-2.2-2.2s0.99-2.2 2.2-2.2 2.2 0.99 2.2 2.2-0.99 2.2-2.2 2.2zm4.28-6.91c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" />
  </svg>
);

// Chat
export const ChatIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);



// export const TenWebLogo = () => <svg height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM4 8.5l8 4 8-4M12 13.5v8"/></svg>;
// export const TypewiseLogo = () => <svg height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M3 3h18v18H3z" opacity=".3"/><path d="M10 10h4v4h-4zm-6 6h4v4H4zm12 0h4v4h-4zm-6-12h4v4h-4z"/></svg>;
// export const LavenderLogo = () => <svg height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0"/></svg>;
// export const WritesonicLogo = () => <svg height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z"/><path d="M12 12l-2 3h4l-2-3z" opacity=".5"/></svg>;

// export const ChartIcon1 = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21v-4M12 21v-2M16 21v-4"/></svg>;
// export const ChartIcon2 = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>;
// export const ChartIcon3 = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
// export const ChartIcon4 = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-6v6m4-3v3M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>;

// export const ProcessIcon1 = () => <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
// export const ProcessIcon2 = () => <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s0 0 0 0" /><ellipse cx="12" cy="7" rx="8" ry="4" /></svg>;
// export const ProcessIcon3 = () => <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
// export const ProcessIcon4 = () => <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

// export const ResultCard1 = () => <img src="https://i.imgur.com/kY1yUoZ.png" className="max-h-full" alt="Result 1" />;
// export const ResultCard2 = () => <img src="https://i.imgur.com/qE4Jk3e.png" className="max-h-full" alt="Result 2" />;
// export const ResultCard3 = () => <img src="https://i.imgur.com/Y4Q5V0G.png" className="max-h-full" alt="Result 3" />;

// export const CheckIcon = () => <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
// export const InnovativeServicesGraphic = () => <img src="https://i.imgur.com/6X2sVpD.png" className="w-full" alt="Innovative Services" />;

// export const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.24 10.36h-1.61v4.8h-1.97v-4.8h-1.2v-1.78h1.2v-1.25c0-1.07.5-2.79 2.79-2.79h1.5v1.78h-.91c-.37 0-.44.18-.44.45v1.81h1.36l-.2 1.78z" /></svg>;
// export const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.42.46-.65.25-1.13.59-1.62 1.08-.49.49-.83.97-1.08 1.62-.24.63-.41 1.36-.46 2.42C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.46 2.42.25.65.59 1.13 1.08 1.62.49.49.97.83 1.62 1.08.63.24 1.36.41 2.42.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.46.65-.25 1.13.59 1.62-1.08.49-.49.83-.97 1.08-1.62.24-.63.41-1.36.46-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.46-2.42-.25-.65-.59-1.13-1.08-1.62-.49-.49-.97-.83-1.62-1.08-.63-.24-1.36-.41-2.42-.46C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06 1.03.05 1.5.2 1.81.33.4.15.69.36.98.65.29.29.5.58.65.98.13.31.28.78.33 1.81.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.03-.2 1.5-.33 1.81-.15.4-.36.69-.65.98-.29.29-.58.5-.98-.65-.31.13-.78.28-1.81.33-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.03-.05-1.5-.2-1.81-.33-.4-.15-.69-.36-.98-.65-.29-.29-.5-.58-.65-.98-.13-.31-.28-.78-.33-1.81-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.05-1.03.2-1.5.33-1.81.15-.4.36.69.65.98.29-.29.58-.5.98-.65.31-.13.78-.28 1.81.33C9.01 3.81 9.33 3.8 12 3.8zm0 4.3c-2.17 0-3.9 1.73-3.9 3.9s1.73 3.9 3.9 3.9 3.9-1.73 3.9-3.9-1.73-3.9-3.9-3.9zm0 6c-1.21 0-2.2-0.99-2.2-2.2s0.99-2.2 2.2-2.2 2.2 0.99 2.2 2.2-0.99 2.2-2.2 2.2zm4.28-6.91c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" /></svg>;

// export const ChatIcon = () => <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;