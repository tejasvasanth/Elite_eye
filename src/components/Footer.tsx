import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer id="contact" ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Stable Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="stable-pattern"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-[#165229] mb-2" />
            <a href="mailto:contact@eliteeyeconsulting.com" className="text-[#165229] text-lg hover:underline">contact@eliteeyeconsulting.com</a>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-[#165229] mb-2" />
            <a href="tel:+918433980217" className="text-[#165229] text-lg hover:underline">+91 8433980217</a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-[#165229] mb-2" />
            <span className="text-[#165229] text-lg">Bengaluru, India</span>
          </div>
        </div>
        <hr className="my-8 border-[#165229]/10" />
        <div className="text-center text-[#165229]/70 text-sm">
          © 2025 EliteEye Consulting Pvt Ltd. See Beyond... Build Better.
        </div>
      </div>
    </footer>
  );
};

export default Footer;