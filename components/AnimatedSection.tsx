import React, { useRef, useEffect, useState } from 'react';

const AnimatedSection: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (element) {
                        observer.unobserve(element);
                    }
                }
            },
            {
                threshold: 0.1
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`${className || ''} transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
