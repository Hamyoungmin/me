import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative px-6 lg:px-24">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(77, 208, 225, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-16">
            <p className="font-mono text-lg mb-4" style={{ 
              color: 'var(--cyan-mint)',
              textShadow: '0 0 20px rgba(77, 208, 225, 0.5)'
            }}>
              <span style={{ color: 'var(--cyan-mint)' }}>05.</span> What&apos;s Next?
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8" 
                style={{ 
                  color: 'var(--white)',
                  textShadow: '0 0 30px rgba(77, 208, 225, 0.2)'
                }}>
              협업 제안하기
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed" 
               style={{ color: 'var(--slate)' }}>
              단순한 프로젝트보다 의미 있는 협업을 지향합니다.<br />
              <br />
              함께 성장할 수 있는 좋은 인연을 기다립니다.<br />
              <span style={{ color: 'var(--lightest-slate)' }}>빠르고 정확하게</span> 답변드리겠습니다.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="200">
          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://open.kakao.com/o/sBzM2JVh" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-2xl font-mono text-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(77, 208, 225, 0.15), rgba(100, 255, 218, 0.15))',
                border: '2px solid rgba(77, 208, 225, 0.4)',
                color: 'var(--cyan-mint)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                textShadow: '0 0 20px rgba(77, 208, 225, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(77, 208, 225, 0.25), rgba(100, 255, 218, 0.25))';
                e.currentTarget.style.borderColor = 'var(--cyan-mint)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(77, 208, 225, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(77, 208, 225, 0.15), rgba(100, 255, 218, 0.15))';
                e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              카카오톡 문의하기 💬
            </a>
            
            <div className="flex gap-8 mt-6">
              <a 
                href="https://github.com/Hamyoungmin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                style={{ color: 'var(--light-slate)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cyan-mint)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(77, 208, 225, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--light-slate)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                style={{ color: 'var(--light-slate)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cyan-mint)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(77, 208, 225, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--light-slate)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
