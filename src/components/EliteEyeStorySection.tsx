import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteEyeStorySection: React.FC = () => {
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
            The EliteEye <span className="text-[#cb5d21]">Story</span>
          </h2>
          <div 
            className={`bg-[#165229]/5 backdrop-blur-sm rounded-xl p-8 border border-[#165229]/10 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[#165229]/70 leading-relaxed mb-4">
              EliteEye was built for businesses that don't want generic consultants. They want sharp, battle-tested partners who know how to build.
            </p>
            <p className="text-[#165229]/70 leading-relaxed mb-4">
              Founded by fintech veteran and growth strategist Siddharth Dhamija (ex- PayPal, Razorpay, Zaakpay), EliteEye merges leadership and niche hiring, PAPG enablement, and executive coaching under one roof, turning experience into execution.
            </p>
            <p className="text-[#165229]/70 leading-relaxed">
              This isn't theory. It's real-world expertise, delivered by specialists who've led from the front. If you're done with one-size-fits-all, you're ready for EliteEye.
            </p>
            <div className="mt-6 text-center">
              <a 
                href="/about" 
                className="inline-block px-8 py-3 bg-[#cb5d21] text-white rounded-full hover:bg-[#cb5d21]/90 transition-all duration-300"
              >
                KNOW US BETTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteEyeStorySection; 