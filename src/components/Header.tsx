import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoImage from '../assets/Logo.jpg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages, navigate to homepage
      navigate('/');
    }
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-white border-b border-[#165229]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleLogoClick}>
            <div className="relative">
              <img 
                src={LogoImage} 
                alt="EliteEye Logo" 
                className="h-20"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Talent', href: '/talent' },
              { name: 'Launch', href: '/launch' },
              { name: 'Elevate', href: '/elevate' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="transition-colors duration-300 font-medium relative group text-[#165229] hover:text-[#cb5d21]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cb5d21] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
