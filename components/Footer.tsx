import React from 'react';
import { WebqueTechziLogo, FacebookIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                       <div className="flex items-center space-x-2">
                          <WebqueTechziLogo />
                       </div>
                    </div>
                    <div className="text-gray-400">
                        <h4 className="font-semibold text-white mb-4">Contact Head Office</h4>
                        <p>No. 1, 1st Floor, 1st Main Road, Ariyalur, Tamilnadu,IN</p>
                        <a href="mailto:info@webquetechzi.com" className="hover:text-white transition-colors">info@webquetechzi.com</a>
                    </div>
                    <div className=" w-full flex 
  justify-center sm:justify-end 
  mt-12 sm:mt-4 
  space-x-6">
                        <a href="https://www.instagram.com/bharaniiiiiii_/" className="hover:text-white inline-block transition-transform duration-300 transform hover:-translate-y-1"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/bharaniiiiiii_/" className="hover:text-white inline-block transition-transform duration-300 transform hover:-translate-y-1"><InstagramIcon /></a>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-gray-500">
                    <p>© 2025 Webque Techzi, Bharani. All Rights Reserved.</p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;