import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative px-6 lg:px-24">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono whitespace-nowrap" 
                style={{ 
                  color: 'var(--white)',
                  textShadow: '0 0 20px rgba(77, 208, 225, 0.3)'
                }}>
              <span style={{ color: 'var(--cyan-mint)' }}>01.</span> About Me
            </h2>
            <div className="h-[2px] w-full max-w-xs rounded-full" 
                 style={{ 
                   background: 'linear-gradient(90deg, var(--cyan-mint), transparent)'
                 }}></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* 왼쪽: 텍스트 정보 (2열) */}
          <div className="lg:col-span-2">
            <AnimatedSection animationType="fade-in-left" delay="200">
              <div className="p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
                   style={{
                     background: 'rgba(17, 34, 64, 0.4)',
                     border: '1px solid rgba(77, 208, 225, 0.1)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                   }}>
                <div className="space-y-4 text-lg" style={{ color: 'var(--slate)' }}>
                  <p>
                    안녕하세요! 저는 자바침입니다.<br />
                    <br />
                    <span style={{ color: 'var(--cyan-mint)' }}>바이브코딩</span>을 통해 다양한 PC 웹·앱, 모바일 웹·앱,<br />
                    그리고 프로그램을 만드는 것을 즐기는 개발자입니다.<br />
                    <br />
                    사용자에게 최고의 경험을 제공하는 것을 목표로,<br />
                    <span style={{ color: 'var(--lightest-slate)' }}>클라이언트의 요구사항을 정확히 이해하고 구현</span>하는 데 집중합니다.<br />
                    <br />
                    최신 기술을 활용해 효율적이고 확장 가능한 솔루션을 제공하며<br />
                    <span style={{ color: 'var(--cyan-mint)' }}>빠르고 정확하게</span> 프로젝트를 완성합니다.
                  </p>
                  
                  <div className="pt-6">
                    <p className="mb-4 text-xl" style={{ color: 'var(--white)' }}>제가 다루는 기술들:</p>
                    <ul className="grid grid-cols-2 gap-3 font-mono text-sm">
                      {['React & Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB & SQL', 'Tailwind CSS', 'Docker', 'AWS'].map((tech, index) => (
                        <li key={index} className="flex items-center gap-2 transition-all duration-200 hover:translate-x-2">
                          <span style={{ color: 'var(--cyan-mint)' }}>▹</span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* 오른쪽: 프로필 사진 (1열) */}
          <AnimatedSection animationType="fade-in-right" delay="300">
            <div className="relative group">
              <div className="relative z-10 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
                   style={{ 
                     boxShadow: '0 0 40px rgba(77, 208, 225, 0.2)',
                     border: '2px solid rgba(77, 208, 225, 0.3)'
                   }}>
                <div className="relative">
                  <Image
                    src="/증명사진.jpg"
                    alt="자바침 프로필 사진"
                    width={300}
                    height={300}
                    className="w-full h-auto transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="absolute top-6 left-6 w-full h-full rounded-3xl -z-10 transition-all duration-500 group-hover:top-3 group-hover:left-3 blur-sm"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(77, 208, 225, 0.3), rgba(100, 255, 218, 0.3))'
                   }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
