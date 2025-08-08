import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* 푸터 */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">자바침</h3>
            <p className="text-gray-400">바이브코딩으로 뭐든 다 만들어드립니다</p>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © 2024 자바침. 빠르고 정확하게 만들어드리고 있으니 안심해주세요!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
