import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteLaunchSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="launch" ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <br></br>
        <br></br>
        <br></br>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl text-[#165229] mb-6">
            From Vision to <span className="text-[#cb5d21]">Viability</span>. And Beyond.
          </h1>
          <p className="text-xl md:text-2xl text-[#165229]/80 max-w-4xl mx-auto mb-8">
          <br></br>
          <br></br>
            We help you fast-track your Fintech journey, with compliance clarity, operational firepower, and execution that moves the needle.
          </p>
          <br></br>
          <button
  className="bg-[#165229] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"
  onClick={() => window.location='/contact'}
>
  LAUNCH WITH CONFIDENCE
</button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-[#165229]/70 leading-relaxed mb-16">
            <p className="mb-6">
              You aren't building a PAPG business, you're architecting the future of digital payments in India.
            </p>
            <p className="mb-6">
              The road to launch, however, is riddled with invisible friction, from regulatory landmines and operational blind spots to fragile infra and unscalable compliance. EliteLaunch is built to solve exactly that.
            </p>
            <p>
              We bring the structure, systems, and executional depth that early-stage fintechs need to launch strong, scale smart, and meet RBI expectations without second-guessing a single move.
            </p>
          </div>
        </div>

        {/* Our Launch Lens Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-4 text-center">
            EliteEye's LAUNCH <span className="text-[#cb5d21]">LENS</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-12 max-w-3xl mx-auto">
            Calibrated and insight-led lens on critical launch-stage blind spots
          </p>
          <p className="text-[#165229]/70 leading-relaxed mb-12 max-w-4xl mx-auto">
            Drawing from deep operational experience, our launch lens uncovers four recurring structural challenges that often stall successful launches. We call them The S4.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">S1 - Surface-Level Compliance</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                Tight paperwork can't mask shallow prep. The RBI sees through templated policies and checkbox answers. Without grounded context, real implementation, and a demonstrated risk mindset, even well-drafted documents fall short.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">S2 - Skeleton Teams</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                Placeholder org charts won't cut it. A lean team can move fast, but in this game, lean often means underprepared. The RBI expects real governance, role clarity, SOPs, and contingency plans.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">S3 - Shaky Infrastructure</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                Tech due diligence is unforgiving. PCI-DSS, ISO 27001, data localization, vendor accountability — everything about your infra and integrations must prove audit-readiness, not mere functionality.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">S4 - Stretched Sustainability</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                Ongoing compliance is non-negotiable. From monthly filings to real-time monitoring and infosec updates, weak systems or passive oversight can trigger penalties or suspension.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
  className="bg-[#cb5d21] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#cb5d21]/90 transition-all duration-300 transform hover:scale-105"
  onClick={() => window.location='/contact'}
>
  SKIP THE SLIP-UPS
</button>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-8 text-center">
            EliteEye's <span className="text-[#cb5d21]">SOLUTIONS</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-12 max-w-3xl mx-auto">
            Launch-stage execution, designed for regulatory lift-off and long-term resilience
          </p>
          <p className="text-[#165229]/70 leading-relaxed mb-12 max-w-4xl mx-auto">
            Each of our solutions is purpose-built to counter the structural gaps before they open, with execution that's as compliant as it is commercially sound.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">Readiness Audit</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                We work with you at ground zero, shaping your business plan, outlining the regulatory pathway, and identifying key compliance needs before you begin.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">Compliance Mapping</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                We help you build the documentation, policies, and governance frameworks that don't just adhere to but signal maturity to RBI's evolving expectations.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">Org & Ops Set Up</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                From defining org charts and designing SOPs to staffing critical, RBI-mandated positions, we ensure your internal architecture reflects operational resilience.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">Market Activation Planning</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                We align your pricing, onboarding, and market positioning with both merchant expectations and regulatory standards, avoiding risks from day one.
              </p>
            </div>
            
            <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
              <h3 className="text-xl font-semibold text-[#165229] mb-4">Resilience Engineering</h3>
              <p className="text-[#165229]/70 leading-relaxed">
                Beyond launch, we help you build audit-ready continuity by embedding risk frameworks, tightening inter-departmental sync, and preparing for growth under scrutiny.
              </p>
            </div>
          </div>
        </div>

        {/* Our Edge Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-4 text-center">
            EliteEye's <span className="text-[#cb5d21]">EDGE</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-12">
            Execution built for scrutiny and scale
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#165229] mb-2">We've Walked the Path</h3>
                <p className="text-[#165229]/70">
                  Led by a founder who's built and scaled fintech businesses and an experienced team of professionals, we know the hurdles and how to clear them.
                </p>
                  </div>
                </div>
                
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#165229] mb-2">We Speak Regulator & Operator</h3>
                <p className="text-[#165229]/70">
                  We combine compliance fluency with business pragmatism. Your setup isn't just compliant, it's scalable.
                </p>
                  </div>
                </div>
                
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#165229] mb-2">We Build Real Teams</h3>
                <p className="text-[#165229]/70">
                  From niche, mandatory hiring to support functions, we help you staff smart, for lasting impact and long-term scale.
                </p>
              </div>
                </div>
                
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#165229]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                  </div>
              <div>
                <h3 className="text-xl font-semibold text-[#165229] mb-2">We Stay Post-Launch</h3>
                <p className="text-[#165229]/70">
                  Most firms exit at licensing. We stay through the chaos of scale, because that's when you need us most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <p className="text-lg text-[#165229]/70 mb-8 max-w-3xl mx-auto">
            Let's turn your Financial services ambition into a business built for scale, scrutiny, and success.
          </p>
          <button
  className="bg-[#165229] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"
   onClick={() => window.location='/contact'}
>
  GET LAUNCH-READY
</button>
        </div>
      </div>
    </section>
  );
};

export default EliteLaunchSection;