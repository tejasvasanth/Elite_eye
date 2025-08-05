import React from 'react';
import Header from '../src/components/Header';
import EliteElevateSection from '../src/components/EliteElevateSection';
import Footer from '../src/components/Footer';

function ElevatePage() {
  return (
    <div className="min-h-screen bg-[#165229] overflow-x-hidden relative">
      <div className="abstract-background"></div>
      <Header />
      <main>
        <EliteElevateSection />
        <Footer />
      </main>
    </div>
  );
}

export default ElevatePage;