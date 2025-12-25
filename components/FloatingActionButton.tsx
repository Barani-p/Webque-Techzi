import React from 'react';
import { ChatIcon } from './Icons';


const FloatingActionButton: React.FC = () => {
    return (
        <button className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50">
           <ChatIcon />
        </button>
    );
};

export default FloatingActionButton;