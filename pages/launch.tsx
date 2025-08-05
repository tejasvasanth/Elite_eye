import React from 'react';
import Header from '../src/components/Header';
import EliteLaunchSection from '../src/components/EliteLaunchSection';
import Footer from '../src/components/Footer';

function LaunchPage() {
  return (
    <div className="min-h-screen bg-[#165229] overflow-x-hidden relative">
      <div className="abstract-background"></div>
      <Header />
      <main>
        <EliteLaunchSection />
        <Footer />
      </main>
    </div>
  );
}

export default LaunchPage;