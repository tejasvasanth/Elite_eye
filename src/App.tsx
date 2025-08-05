import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EliteEyeEdgeSection from './components/EliteEyeEdgeSection';
import EliteEyeStorySection from './components/EliteEyeStorySection';
import EliteEyePartnershipSection from './components/EliteEyePartnershipSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <Header />
      <main>
        <HeroSection />
        <div>
          <EliteEyeEdgeSection />
        </div>
        <div>
          <EliteEyeStorySection />
        </div>
        <div>
          <EliteEyePartnershipSection />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;