import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: scrollRef, isVisible: isScrollVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Initial Hero Section - Full Viewport */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Initial Visible Content - Centered */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#165229] mb-4">
            <span 
              className={`inline-block transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              See Beyond...
            </span>
            <span className="text-[#cb5d21] block">
              <span 
                className={`inline-block transition-all duration-1000 delay-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Build Better
              </span>
            </span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-[#165229]/80 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Whether you're hiring, launching or leading, we help you do it with insight and intent.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Scroll Revealed Content - Positioned Below Viewport */}
      <section 
        ref={scrollRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out mt-16 ${
          isScrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
       

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* The EliteEye Solutions */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[#165229] mb-4">
              The EliteEye Solutions
            </h3>
            <p className="text-lg text-[#165229]/70 max-w-2xl mx-auto mb-8">
              We bring precision to every layer of growth: people, process, and performance.
            </p>
          </div>
          
          {/* Key Services Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'EliteTalent',
                description: 'Because great hires come from insight that runs deeper than the resume',
                bulletPoints: ['Talent strategy', 'Talent acquisition', 'Team building'],
                link: '/talent'
              },
              {
                title: 'EliteLaunch',
                description: 'Because scaling a PAPG business needs structure, not just speed',
                bulletPoints: ['Early-stage Fintech,      planning and licensing', 'Org Setup', 'Scaling Support'],
                link: '/launch'
              },
              {
                title: 'EliteElevate',
                description: 'Because leadership isn\'t taught, it\'s developed',
                bulletPoints: ['Executive coaching', 'Culture shaping', 'Leadership enhancement'],
                link: '/elevate'
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-6 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-[#165229] mb-3">{service.title}</h3>
                <p className="text-[#165229]/70 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
                
                {/* Bullet Points */}
                <ul className="mb-4 flex-grow space-y-2">
                  {service.bulletPoints.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start text-[#165229] text-sm"
                    >
                      <span className="text-[#165229] mr-2 mt-1.5 w-1.5 h-1.5 bg-[#165229] rounded-full"></span>
                      <span className="text-[#165229]/80">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.link}
                  className="text-[#cb5d21] text-sm font-medium hover:text-[#cb5d21]/80 transition-colors mt-auto"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          
        </div>
      </section>
    </>
  );
};

export default HeroSection;