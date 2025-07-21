import { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    volunteers: 0,
    years: 0,
    impact: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  
  const targetCounts = {
    projects: 45,
    volunteers: 120,
    years: 8,
    impact: 2500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      if (progress >= 1) {
        setCounts(targetCounts);
        clearInterval(timer);
      } else {
        setCounts({
          projects: Math.floor(targetCounts.projects * progress),
          volunteers: Math.floor(targetCounts.volunteers * progress),
          years: Math.floor(targetCounts.years * progress),
          impact: Math.floor(targetCounts.impact * progress)
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      number: counts.projects,
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      number: counts.volunteers,
      label: 'Active Volunteers',
      suffix: '+',
    },
    {
      number: counts.years,
      label: 'Years of Service',
      suffix: '',
    },
    {
      number: counts.impact,
      label: 'Lives Impacted',
      suffix: '+',
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-deep-base/95">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center text-center rounded-2xl p-8 bg-gradient-to-br from-[#1a1023] to-[#1a1023]/80 border border-[#2d193c] shadow-md"
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#a020f0] to-[#ff5e62] text-transparent bg-clip-text">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-100 font-semibold text-base md:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
