import React from 'react';
import Header from '../src/components/Header';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-[#165229]/5 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <br></br>
            <br></br>
            <br></br>
            <h1 
              className="text-4xl md:text-4xl text-[#165229] mb-8 leading-tight"
            >
              We didn't build EliteEye to follow the rules. We built it to <span className="text-[#cb5d21]">rewrite them</span>.
            </h1>
          </div>
        </section>

        {/* Origin Story */}
        <section>
          <div className="max-w-4xl mx-auto px-6">
            <h2 
              className="text-4xl md:text-4xl text-[#165229] mb-12 text-center"
            >
              EliteEye's Origin <span className="text-[#cb5d21]">Story</span>
            </h2>
            
            <div 
              className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-[#165229]/10"
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-[#165229]/70">
                  EliteEye didn't start with a business plan. It started with a pattern. Time and again, Siddharth Dhamija saw founders trying to scale without the right talent, structure, or leadership support. Most consultancies offered surface-level advice, not hands-on partnership. That's when the idea for EliteEye was born, a firm built by operators, not theorists.
                </p>
                
                <p className="text-[#165229]/70">
                  Joined by Neha Dhamija, a force in leadership hiring, and Manish Jain, a seasoned leadership coach, EliteEye became more than a consulting firm. It became a collective built on insight, experience, and execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Leaders - Redesigned Section */}
        <section className="py-20 bg-[#165229]/5 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 
              className="text-4xl md:text-4xl text-[#165229] mb-12 text-center"
            >
              EliteEye's <span className="text-[#cb5d21]">Team</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: "Siddharth Dhamija",
                  title: "The Builder-in-Chief | Co-Founder, EliteEye | Lead, EliteLaunch",
                  description: "A fintech veteran with leadership stints at PayPal, Razorpay, and Subex, Siddharth brings deep operational insight to every growth challenge. At EliteEye, he drives the PAPG and business enablement practice and shapes high-impact leadership hiring through his vast network and execution-first mindset.",
                  photo: "../src/assets/Sid.jpg"
                },
                {
                  name: "Neha Dhamija",
                  title: "The Talent Architect | Co-Founder | Lead, EliteTalent",
                  description: "A hiring strategist with deep BFSI expertise, Neha has led leadership and niche recruitment for over a decade. At EliteTalent, she brings precision, clarity, and a strong editorial instinct to every mandate, helping businesses hire not just smart, but right.",
                  photo: "../src/assets/Neha.jpg"
                },
                {
                  name: "Manish Jain",
                  title: "The Mindset Engineer | Partner, EliteEye | Lead, EliteElevate",
                  description: "Manish is a seasoned executive coach and NLP practitioner with two decades of experience in leadership development. At EliteElevate, he helps founders and CXOs build clarity, resilience, and self-mastery to lead through change with confidence.",
                  photo: "../src/assets/manish.png"
                }
              ].map((leader) => (
                <div 
                  key={leader.name}
                  className="bg-white rounded-2xl p-4 border-2 border-gray-300 shadow-lg text-center flex flex-col"
                >
                  <div className="w-full px-4 pt-4">
                     <img 
                        src={leader.photo} 
                        alt={`Portrait of ${leader.name}`}
                        className="w-full h-auto object-cover rounded-2xl"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/165229/FFFFFF?text=EliteEye'; }}
                      />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-center">
                    <h3 className="text-2xl font-bold text-[#cb5d21] mb-2">{leader.name}</h3>
                    <p className="text-sm text-[#cb5d21] font-medium leading-snug mb-4">{leader.title}</p>
                    <p className="text-base text-left text-[#165229]/70 leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-[#165229]/5 mt-16">
          <div className="w-full px-6">
            <div className="w-full">
              {/* Mission Only */}
              <div 
                className="bg-white backdrop-blur-sm rounded-2xl p-12 border border-[#165229]/10 transition-all duration-300 hover:bg-[#165229]/5 hover:border-[#cb5d21]/50 hover:shadow-lg hover:-translate-y-2 transform w-full"
              >
                <h3 className="text-4xl md:text-4x1 text-[#165229] mb-6 text-center">EliteEye's <span className="text-[#cb5d21]">Mission</span></h3>
                <p className="text-[#165229]/70 leading-relaxed text-xl md:text-2xl text-center max-w-5xl mx-auto">
                  To partner with visionary businesses and fuel their growth through smart strategy, strong teams, and leadership insight.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Values - Fancy Redesign */}
      <section className="py-20 bg-gradient-to-br from-[#165229]/5 via-white to-[#cb5d21]/5 relative overflow-hidden mt-16">
       {/* Enhanced Animated Background Elements */}
       <div className="absolute inset-0">
         {/* Floating geometric shapes */}
         <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#cb5d21]/20 to-[#165229]/20 rounded-full animate-pulse"></div>
         <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-[#165229]/20 to-[#cb5d21]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
         <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-[#cb5d21]/25 to-[#165229]/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
         <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-[#165229]/15 to-[#cb5d21]/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
         
         {/* Additional floating elements */}
         <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-[#cb5d21]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-3/4 right-1/6 w-6 h-6 bg-[#165229]/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
         <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-gradient-to-br from-[#cb5d21]/15 to-[#165229]/15 rounded-lg animate-bounce" style={{ animationDelay: '1.5s' }}></div>
         
         {/* Sparkle effects */}
         <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
         <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#cb5d21] rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
         <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-[#165229] rounded-full animate-ping" style={{ animationDelay: '1.8s' }}></div>
       </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                     <h2 
           className="text-4xl md:text-4xl text-[#165229] mb-16 relative"
         >
           EliteEye's <span className="text-[#cb5d21] relative inline-block">
             Values
             <div className="absolute -inset-2 bg-gradient-to-r from-[#cb5d21]/30 to-[#165229]/30 blur-xl opacity-80 animate-pulse"></div>
             <div className="absolute -inset-1 bg-gradient-to-r from-[#cb5d21]/20 to-[#165229]/20 blur-lg opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
             {/* Floating sparkles around the title */}
             <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#cb5d21] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
             <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#165229] rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
             <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
           </span>
         </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              name: 'Clarity',
              description: 'Clear vision, clear communication, clear results',
              icon: '✨',
              color: 'from-blue-400 to-cyan-400'
            },
            {
              name: 'Transparency',
              description: 'Open, honest, and authentic in everything we do',
              icon: '🔍',
              color: 'from-green-400 to-emerald-400'
            },
            {
              name: 'Accountability',
              description: 'We own our commitments and deliver on our promises',
              icon: '⚡',
              color: 'from-yellow-400 to-orange-400'
            },
            {
              name: 'Integrity',
              description: 'Unwavering ethical standards and moral compass',
              icon: '🛡️',
              color: 'from-purple-400 to-pink-400'
            }
          ].map((value, index) => (
            <div 
              key={value.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
                                 {/* Enhanced Glowing Background */}
               <div className="absolute -inset-2 bg-gradient-to-r from-[#cb5d21]/30 to-[#165229]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
               <div className="absolute -inset-1 bg-gradient-to-r from-[#cb5d21]/20 to-[#165229]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" style={{ animationDelay: '0.2s' }}></div>
               
               {/* Main Card */}
               <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#cb5d21]/20">
                
                                     {/* Enhanced Animated Icon Container */}
                 <div className="relative mb-6">
                   {/* Icon glow effect */}
                   <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-all duration-500 mx-auto`}></div>
                   
                   <div className={`relative w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto text-3xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                     {value.icon}
                   </div>
                   
                   {/* Enhanced floating particles around icon */}
                   <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#cb5d21]/40 rounded-full animate-ping"></div>
                   <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#165229]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                   <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                   <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#cb5d21]/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                   
                   {/* Orbital particles */}
                   <div className="absolute inset-0 w-20 h-20 mx-auto">
                     <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#cb5d21]/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                     <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#165229]/30 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
                   </div>
                 </div>
                
                                     {/* Enhanced Title with gradient text effect */}
                 <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#165229] to-[#cb5d21] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative">
                   {value.name}
                   {/* Title glow effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-[#165229] to-[#cb5d21] bg-clip-text text-transparent blur-sm opacity-50 group-hover:opacity-80 transition-all duration-300"></div>
                 </h3>
                 
                 {/* Enhanced Description */}
                 <p className="text-base text-[#165229]/70 leading-relaxed group-hover:text-[#165229]/90 transition-colors duration-300 group-hover:scale-105 transform">
                   {value.description}
                 </p>
                 
                 {/* Enhanced hover effect border */}
                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#cb5d21]/40 transition-all duration-500"></div>
                 <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#165229]/20 transition-all duration-700" style={{ animationDelay: '0.1s' }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center space-x-4 mt-8">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-[#165229] to-[#cb5d21] rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>

        {/* Our DNA */}
        <section className="py-8 mt-4">
          <div className="max-w-4xl mx-auto px-6">
            <h2 
              className="text-4xl md:text-5xl text-[#165229] mb-12 text-center"
            >
              EliteEye's <span className="text-[#cb5d21]">DNA</span>
            </h2>
            
            <div 
              className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-[#165229]/10"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#165229] mb-6">
                  We work with you, not for you
                </h3>
                <p className="text-base text-[#165229]/70 leading-relaxed">
                  We co-create solutions that align with your vision, culture, and context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#165229]/5 mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 
              className="text-4xl md:text-4xl text-[#165229] mb-6"
            >
              Ready to <span className="text-[#cb5d21]">Connect</span>?
            </h2>
            <p 
              className="text-xl text-[#165229]/80 max-w-2xl mx-auto mb-8"
            >
              Let's discuss how EliteEye can help you see beyond the obvious and build something extraordinary.
            </p>
            <button 
              className="px-12 py-4 bg-[#165229] text-white font-semibold rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"onClick={() => window.location='/contact'}
>
          
              CONNECT WITH US
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
