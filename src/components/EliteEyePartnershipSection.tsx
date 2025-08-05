import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteEyePartnershipSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-10 bg-white overflow-hidden">
      {/* Stable Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="stable-pattern"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 
            className={`text-4xl md:text-5xl text-[#165229] mb-6 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            The EliteEye <span className="text-[#cb5d21]">Partnership</span>
          </h2>
          <p 
            className={`text-xl text-[#165229]/80 max-w-2xl mx-auto mb-12 text-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Growth isn't a gamble — it's a well-executed plan backed by insight. Let's build yours together.
          </p>
          
          <div className="text-center">
            <button 
              className={`px-12 py-4 bg-[#cb5d21] text-white font-semibold rounded-full hover:bg-[#cb5d21]/90 transition-all duration-300 transform hover:scale-105 pulse-cta ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.6s' }}
              onClick={() => window.location='/contact'}
            >
              CONNECT WITH US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteEyePartnershipSection; 