import React from 'react';
import { Compass, Search, Users } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteTalentSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const services = [
    {
      icon: Compass,
      title: 'Talent Strategy',
      description: 'Strategic direction for your hiring challenges',
      delay: '0s'
    },
    {
      icon: Search,
      title: 'Talent Acquisition',
      description: 'Find exceptional, transformative talent for leadership roles',
      delay: '0.2s'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Build teams with precision hiring and deep networks',
      delay: '0.4s'
    }
  ];

  return (
    <section id="talent" ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Morphing Background Network */}
      <div className="absolute inset-0 opacity-20">
        <div className="network-pattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-[#165229] mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Elite<span className="text-[#cb5d21]">Talent</span>
          </h2>
          <p 
            className={`text-xl text-[#165229]/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="insight-glow">Because great hires come from insight that runs deeper than the resume</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`service-card group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              <div className="bg-[#165229]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="mb-6">
                  <div className="service-icon-container">
                    <service.icon className="w-12 h-12 text-[#cb5d21] service-icon" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#165229] mb-4">{service.title}</h3>
                <p className="text-[#165229]/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteTalentSection;