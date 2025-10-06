'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'projects', label: 'Projects', number: '02' },
    { id: 'skills', label: 'Skills', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-lg' 
        : ''
    }`}
    style={{ 
      background: isScrolled ? 'var(--navy-shadow)' : 'transparent'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* 로고 */}
          <div 
            className="text-3xl font-bold cursor-pointer transition-all duration-300 font-mono"
            onClick={() => scrollToSection('home')}
            style={{ color: 'var(--white)' }}
          >
            <span className="text-4xl">J</span>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                style={{ color: 'var(--slate)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-mint)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}
              >
                <span style={{ color: 'var(--cyan-mint)' }}>{item.number}. </span>
                {item.label}
              </button>
            ))}
            <a 
              href="#contact" 
              className="border px-5 py-3 rounded font-mono text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                borderColor: 'var(--cyan-mint)', 
                color: 'var(--cyan-mint)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--cyan-mint-tint)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Resume
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none transition-all duration-300"
              style={{ color: 'var(--white)' }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden rounded-lg mt-2 py-4" style={{ background: 'var(--light-navy)' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 font-mono transition-colors duration-300"
                style={{ color: 'var(--slate)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-mint)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}
              >
                <span style={{ color: 'var(--cyan-mint)' }}>{item.number}. </span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
