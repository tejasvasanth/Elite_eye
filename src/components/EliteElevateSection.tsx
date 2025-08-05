import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EliteElevateSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="elevate" ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-4xl md:text-5xl text-[#165229] mb-6">
            Unlocking Human Potential at the <span className="text-[#cb5d21]">Leadership Level</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#165229]/80 max-w-4xl mx-auto mb-8">
          <br></br>
            EliteElevate brings clarity, resilience, and self-mastery to the leaders shaping tomorrow's businesses.
          </p>
          <br></br>
          <button
  className="bg-[#165229] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"
  onClick={() => window.location='/contact'}

>
  LET'S ELEVATE LEADERSHIP
</button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-[#165229]/70 leading-relaxed mb-16">
            <p className="mb-6">
              Today's leaders operate in high-stakes, high-change environments. Whether they're first-time founders, seasoned CXOs, or emerging high performers, what they often lack isn't domain expertise — it's the time, tools, and space to grow from the inside out.
            </p>
            <p>
              EliteElevate was built to bridge this gap. Led by executive coach and NLP practitioner Manish Jain, EliteElevate blends Behavioural Science, Real-world Experience, and Performance Psychology to unlock deep leadership potential.
            </p>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-8 text-center">
            EliteEye's <span className="text-[#cb5d21]">SERVICES</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-12 max-w-3xl mx-auto">
            Leadership development for the humans behind high-growth businesses
          </p>
          <p className="text-[#165229]/70 leading-relaxed mb-12 max-w-4xl mx-auto">
            True leadership begins with inner awareness and outer alignment. Our services are designed to help founders, CXOs, and high-potential talent build emotional intelligence, strategic perspective, and resilience that scales with the business.
          </p>

          <div className="space-y-12">
            {/* Current Offerings */}
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-[#165229] mb-6">Current Offerings:</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
                  <h4 className="text-xl font-semibold text-[#165229] mb-4">Psychometric Assessments</h4>
                  <p className="text-[#165229]/70 leading-relaxed">
                    We help founders and leadership teams identify personality traits, team dynamics, cognitive styles, and potential risk areas using structured, evidence-based assessments. It's a powerful tool for unlocking self-awareness and building aligned, high-performance leadership.
          </p>
        </div>

                <div className="bg-[#165229]/5 rounded-2xl p-8 border border-[#165229]/10">
                  <h4 className="text-xl font-semibold text-[#165229] mb-4">1:1 & Group Coaching (By Invitation)</h4>
                  <p className="text-[#165229]/70 leading-relaxed">
                    Through focused 1:1 and small group sessions, we help founders and CXOs sharpen self-awareness, build emotional agility, and elevate their leadership from reactive to intentional. This isn't about quick fixes. It's about lasting shifts built for leaders navigating growth, change, and reinvention.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Offering */}
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-[#165229] mb-6">Future Offering:</h3>
              <div className="bg-gradient-to-r from-[#cb5d21]/10 to-[#165229]/10 rounded-2xl p-8 border border-[#cb5d21]/20">
                <h4 className="text-xl font-semibold text-[#165229] mb-4">Curated Learning Experiences (In Development)</h4>
                <p className="text-[#165229]/70 leading-relaxed">
                  We're designing founder-first sessions, closed-door workshops, and expert-led dialogues tailored to real challenges, not recycled theory. Practical, high-context, and built for today's decision-makers. This is immersive learning, minus the noise.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
  className="bg-[#cb5d21] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#cb5d21]/90 transition-all duration-300 transform hover:scale-105"
  onClick={() => window.location='/contact'}
>
  REQUEST A DISCOVERY SESSION
</button>
          </div>
        </div>

        {/* Our Edge Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-4 text-center">
            EliteEye's <span className="text-[#cb5d21]">EDGE</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-12">
            Rooted in reality. Designed for change.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#165229]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#165229] mb-3">Driven by Real Insight</h3>
              <p className="text-[#165229]/70">
                We draw from behavioural science, leadership psychology, and real-world experience to unlock what truly drives leadership success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#165229]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#165229] mb-3">Shaped by Your Context</h3>
              <p className="text-[#165229]/70">
                Every leader, team, and challenge is different, and so is our support. Our solution is tailored, not templated.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#165229]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#165229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#165229] mb-3">Built for Lasting Change</h3>
              <p className="text-[#165229]/70">
                We don't believe in short-lived, motivational highs. We focus on long-term, grounded growth that shows in mindset, action, and outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Our Ideal Partners Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-[#165229] mb-4 text-center">
            OUR IDEAL <span className="text-[#cb5d21]">PARTNERS</span>
          </h2>
          <p className="text-lg text-[#165229]/70 text-center mb-8">
            Designed for leaders and potential leaders ready to grow from within
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#165229]/5 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-[#165229] mb-2">Founders & Co-founders</h3>
              <p className="text-sm text-[#165229]/70">navigating rapid growth</p>
            </div>
            <div className="bg-[#165229]/5 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-[#165229] mb-2">CXOs</h3>
              <p className="text-sm text-[#165229]/70">in transition or taking on expanded mandates</p>
            </div>
            <div className="bg-[#165229]/5 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-[#165229] mb-2">Emerging leaders</h3>
              <p className="text-sm text-[#165229]/70">being groomed for next-level roles</p>
            </div>
            <div className="bg-[#165229]/5 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-[#165229] mb-2">Teams</h3>
              <p className="text-sm text-[#165229]/70">in need of behavioural calibration or cohesion</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#165229]/70 mb-8 italic">
              Your next level won't come from doing more, but from leading differently.
            </p>
            <button
  className="bg-[#165229] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  START YOUR ELEVATION
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteElevateSection;