'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

// BootScreen을 클라이언트에서만 렌더링하도록 dynamic import 사용
const BootScreen = dynamic(() => import('@/components/BootScreen'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-white text-xl">로딩 중...</div>
    </div>
  )
});

export default function Home() {
  const [isBootComplete, setIsBootComplete] = useState(false);

  const handleBootComplete = () => {
    setIsBootComplete(true);
  };

  // 부팅이 완료되지 않았다면 부팅 스크린 표시
  if (!isBootComplete) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  // 부팅 완료 후 메인 페이지 표시 (페이드인 효과 추가)
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'var(--navy)' }}>
      {/* 페이드인 애니메이션 */}
      <div className="animate-fadeIn">
        {/* 메인 컨텐츠 */}
        <div className="relative z-10">
          <Navbar />
          
          {/* 왼쪽 소셜 링크 사이드바 */}
          <div className="hidden lg:block fixed left-10 bottom-0 z-10">
            <ul className="flex flex-col items-center gap-5 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-[var(--light-slate)] after:mt-5">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-[var(--light-slate)] hover:text-[var(--cyan-mint)] hover:-translate-y-1 transition-all duration-200 inline-block">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-[var(--light-slate)] hover:text-[var(--cyan-mint)] hover:-translate-y-1 transition-all duration-200 inline-block">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          
          {/* 오른쪽 이메일 사이드바 */}
          <div className="hidden lg:block fixed right-10 bottom-0 z-10">
            <div className="flex flex-col items-center gap-5 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-[var(--light-slate)] after:mt-5">
              <a href="mailto:your.email@example.com" 
                 className="text-[var(--light-slate)] hover:text-[var(--cyan-mint)] hover:-translate-y-1 transition-all duration-200 font-mono text-xs tracking-widest"
                 style={{ writingMode: 'vertical-rl' }}>
                your.email@example.com
              </a>
            </div>
          </div>
          
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          
          {/* 푸터 */}
          <footer className="py-8" style={{ color: 'var(--slate)' }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--lightest-slate)' }}>자바침</h3>
                <p style={{ color: 'var(--slate)' }}>바이브코딩으로 뭐든 다 만들어드립니다</p>
              </div>
              
              <div className="border-t pt-4" style={{ borderColor: 'var(--lightest-navy)' }}>
                <p className="text-sm font-mono" style={{ color: 'var(--slate)' }}>
                  © 2024 자바침. 빠르고 정확하게 만들어드리고 있으니 안심해주세요!
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
