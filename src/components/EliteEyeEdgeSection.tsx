import React from 'react';
import { Zap, Users, BarChart3, Shield, Brain } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteEyeEdgeSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-10 bg-white overflow-hidden">
      {/* Stable Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="stable-pattern"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div>
          <h2 
            className={`text-4xl md:text-5xl text-[#165229] mb-6 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            The EliteEye <span className="text-[#cb5d21]">Edge</span>
          </h2>
          <p 
            className={`text-xl text-[#165229]/80 max-w-3xl mx-auto mb-6 text-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            You bring the vision. We bring the Edge that moves it forward.
          </p>
          <p 
            className={`text-lg text-[#165229]/70 max-w-3xl mx-auto mb-6 text-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            The EliteEye Edge isn't just in what we do, but also in how we do it. Here's what sets us apart, and sets you up for success…
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            {[
              {
                icon: Users,
                title: 'People-first, always',
                description: 'We build trust, not just teams. Our approach is deeply human, always ethical, and fiercely committed to your vision.'
              },
              {
                icon: Shield,
                title: 'Uncompromising integrity',
                description: 'We say what we mean, do what we say, and always act in your best interest. No shortcuts, no compromises.'
              },
              {
                icon: Brain,
                title: 'Insight-driven action',
                description: 'We combine data, intuition, and experience to deliver clarity and results — fast.'
              }
            ].map((edge, index) => (
              <div 
                key={index}
                className={`bg-[#165229]/5 backdrop-blur-sm rounded-xl p-6 border border-[#165229]/10 transition-all duration-300 hover:bg-[#165229]/10 hover:border-[#cb5d21]/30 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <edge.icon className="w-8 h-8 text-[#165229] mb-4" />
                <h3 className="text-xl font-semibold text-[#165229] mb-3">{edge.title}</h3>
                <p className="text-[#165229]/70 leading-relaxed">{edge.description}</p>
              </div>
            ))}
          </div>
          {/* Bottom two boxes centered */}
          <div className="flex justify-center mb-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                { 
                  icon: BarChart3, 
                  title: 'Designed for lasting impact', 
                  description: "We focus on consistent, sustainable outcomes — whether it's leadership, launch, or a mindset shift.",
                },
                { 
                  icon: Zap, 
                  title: 'Engineered for meaningful growth', 
                  description: 'Redefining due diligence — We are transforming leadership hiring with our exclusive 5-year performance and reputation scan.'
                }
              ].map((edge, index) => (
                <div 
                  key={index + 3}
                  className={`bg-[#165229]/5 backdrop-blur-sm rounded-xl p-6 border border-[#165229]/10 transition-all duration-300 hover:bg-[#165229]/10 hover:border-[#cb5d21]/30 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <edge.icon className="w-8 h-8 text-[#165229] mb-4" />
                  <h3 className="text-xl font-semibold text-[#165229] mb-3">{edge.title}</h3>
                  <p className="text-[#165229]/70 leading-relaxed">{edge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteEyeEdgeSection;