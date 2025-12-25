import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
    target: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration = 2000, className = '', suffix = '', prefix = '' }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef<HTMLParagraphElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) {
                            startTime = timestamp;
                        }

                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);
                        const value = Math.floor(percentage * target);

                        setCurrentValue(value);

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            setCurrentValue(target);
                        }
                    };

                    requestAnimationFrame(animate);
                    
                    if (element) {
                        observer.unobserve(element);
                    }
                }
            },
            {
                threshold: 0.5, 
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
    }, [target, duration]);

    return (
        <p ref={ref} className={className}>
            {prefix}{currentValue}{suffix}
        </p>
    );
};

export default AnimatedNumber;
