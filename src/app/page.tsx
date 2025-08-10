'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Sphere3D from '@/components/Sphere3D';
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
    <div className="min-h-screen bg-gray-100 text-black relative overflow-hidden">
      {/* 페이드인 애니메이션 */}
      <div className="animate-fadeIn">
        {/* 3D 구체 배경 */}
        <Sphere3D />
        
        {/* 메인 컨텐츠 */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          
          {/* 푸터 */}
          <footer className="bg-gray-100/90 backdrop-blur-sm text-black py-8 border-t border-black/10">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">자바침</h3>
                <p className="text-gray-600">바이브코딩으로 뭐든 다 만들어드립니다</p>
              </div>
              
              <div className="border-t border-black/10 pt-4">
                <p className="text-gray-600 text-sm">
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
