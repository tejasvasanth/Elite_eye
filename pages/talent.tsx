import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function TalentPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <div className="abstract-background"></div>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-[#165229]/5 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h6 className="text-4xl md:text-3xl text-[#165229] mb-8 leading-tight">
              Great Hires Aren't Found by Chance. <br></br>They're<span className="text-[#cb5d21] italic"> Engineered</span>
            </h6>
            <br></br>
            <button
              className="px-8 py-4 bg-[#165229] text-white font-semibold rounded-full hover:bg-[#165229]/90 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location='/contact'}
            >
              UNCOVER NICHE TALENT
            </button>
          </div>
        </section>

        {/* Problem-Solution Block */}
        <section className="py-0 mt-8">
          <div className="max-w-4xl mx-auto px-6">
            <br></br>
            <div className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-[#165229]/10">
              <p className="text-lg text-[#165229]/70 leading-relaxed mb-6">
                Exceptional roles need exceptional hires… and neither are easy to find.
              </p>
              <p className="text-lg text-[#165229]/70 leading-relaxed mb-6">
                From leadership positions to highly specialized functions, great talent is hard to access and even harder to evaluate. Resumes don't reveal mindset. Interviews miss the nuance. Traditional recruitment tools fall short when the stakes are high. That's where we come in. We don't just fill a seat, we find talent that shapes the growth trajectory of your business.
              </p>
              <p className="text-xl font-semibold text-[#165229]">
                EliteTalent is your north star for niche and strategic hiring.
              </p>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-20 bg-[#165229]/5 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl 
              text-[#165229] mb-4">
                EliteEye's <span className="text-[#cb5d21]">Solutions</span>
              </h2>
              <p className="text-xl text-[#165229]/80 max-w-2xl mx-auto">
                Precision-backed recruitment for high-stakes, high-impact mandate.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Talent Strategy",
                  description: "We partner with founders and hiring leads to shape the role narrative, align internal expectations, and define the attributes that truly matter to your business goals and culture."
                },
                {
                  title: "Talent Acquisition",
                  description: "We activate closed-door networks, run behaviourally anchored screenings, and surface professionals whose potential and track record integrate with your business mission."
                },
                {
                  title: "Team Building",
                  description: "We help you build future-ready teams with the right blend of capability, compatibility, and continuity, tailored to your stage and growth vision."
                }
              ].map((solution, index) => (
                <div 
                  key={solution.title}
                  className="bg-white rounded-xl p-8 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-[#165229] mb-4">{solution.title}</h3>
                  <p className="text-[#165229]/70 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Edge */}
        <section className="py-20 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#165229] mb-4">
                EliteEye's<span className="text-[#cb5d21]"> Edge</span>
              </h2>
              <p className="text-xl text-[#165229]/80 max-w-2xl mx-auto">
                Expertise that delivers what resumes and interviews can't.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "We Build With Insight, Not Assumptions",
                  description: "As former operators, we know what exceptional looks like, allowing us to provide sharper role definition, tighter alignment, and better long-term outcomes."
                },
                {
                  title: "We Hunt in Hidden Circles",
                  description: "We access deep networks and quiet talent pools that don't show up on job boards and wouldn't be on your radar without us."
                },
                {
                  title: "We Treat Insight Like Infrastructure",
                  description: "Our shortlists are shaped by behavioural data, cultural mapping, and real-world context, so you get synergy across skill, style, and stage."
                },
                {
                  title: "We Scan Reputations, Not Just Resumes",
                  description: "Our 3-year performance scan + psychometric insights = full spectrum insight into mindset and cultural fit."
                },
                {
                  title: "We Prioritize Precision Over Volume",
                  description: "Every search is highly scoped, deliberately resourced, and curated to deliver the right fit. No pipelines, no filler."
                },
                {
                  title: "We Speak BFSI Fluently",
                  description: "We come in pre-calibrated with sector fluency, stakeholder rapport, and network depth that gets results faster and better."
                }
              ].map((edge, index) => (
                <div 
                  key={edge.title}
                  className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-6 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-[#165229] mb-3">{edge.title}</h3>
                  <p className="text-[#165229]/70 leading-relaxed text-sm">{edge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        {/* Our Approach */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#165229] mb-4">
                EliteEye's <span className="text-[#cb5d21]">Approach</span>
              </h2>
              <p className="text-xl text-[#165229]/80 max-w-2xl mx-auto">
                Methodical by design, insightful by default.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  title: "Discovery & Alignment",
                  description: "Deep-dive into your business goals and co-define the role, success metrics, and candidate DNA."
                },
                {
                  title: "Target Sourcing",
                  description: "Map, identify, and tap into our inner network to reach high-calibre talent beyond the job boards."
                },
                {
                  title: "Behavioural Deep-Dive",
                  description: "Assess mindset, leadership traits, and working styles through behavioural interviews and psychometric diagnostics."
                },
                {
                  title: "Reputation & Fit Scan",
                  description: "Exclusive 3-year review of past performance and peer perception across functional touchpoints."
                },
                {
                  title: "Selection & Success",
                  description: "Support through final interviews, internal consensus, and post-handoff check-in."
                }
              ].map((step, index) => (
                <div 
                  key={step.title}
                  className="bg-[#165229]/5 backdrop-blur-sm rounded-xl p-6 border border-[#165229]/10 hover:border-[#cb5d21]/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#165229] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#165229] mb-3">{step.title}</h3>
                  <p className="text-[#165229]/70 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[#165229]/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-4xl text-[#165229] mb-6">
              Ready to find the one who moves the business?
            </h2>
            <p className="text-xl text-[#165229]/80 max-w-2xl mx-auto mb-8">
              Let's partner to find leadership and niche talent that's in tune with your vision, not just your job description.
            </p>
            <button className="px-8 py-4 bg-[#cb5d21] text-white font-semibold rounded-full hover:bg-[#cb5d21]/90 transition-all duration-300 transform hover:scale-105" onClick={() => window.location='/contact'}>
              CONNECT WITH ELITETALENT
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TalentPage;