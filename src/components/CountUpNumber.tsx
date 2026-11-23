import React, { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  duration = 2000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  // Parse prefix, number, and suffix from string like "₦125B+", "30+", "2008", "100%"
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    // If reduced motion is requested, render immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startNumber = 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easeOutQuart curve for organic deceleration
            const ease = 1 - Math.pow(1 - progress, 4);
            const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * ease);

            setDisplayValue(`${prefix}${currentNumber.toLocaleString()}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, targetNumber, prefix, suffix, hasAnimated]);

  return (
    <span ref={containerRef} className={className}>
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
};
