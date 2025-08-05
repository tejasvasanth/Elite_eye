import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TalentPage from '../pages/talent.tsx';
import LaunchPage from '../pages/launch.tsx';
import ElevatePage from '../pages/elevate.tsx';
import AboutPage from '../pages/about.tsx';
import ContactPage from '../pages/contact.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/elevate" element={<ElevatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
