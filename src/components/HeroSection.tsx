import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-24 pt-40">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(77, 208, 225, 0.3) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.2) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '-5s'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4" 
              style={{ 
                color: 'var(--white)',
                textShadow: '0 0 40px rgba(77, 208, 225, 0.3)'
              }}>
            안녕하세요.<br />
            저는 <span style={{ 
              color: 'var(--cyan-mint)',
              textShadow: '0 0 15px rgba(77, 208, 225, 0.3)'
            }}>자바침</span>입니다!
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="100">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8" 
              style={{ color: 'var(--light-slate)' }}>
            빠른 결과물, 확실한 만족
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="200">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--slate)' }}>
              저는 다양한 PC 웹·앱, 모바일 웹·앱,<br />
              그리고 프로그램을 만드는 전문 개발자입니다.<br />
              <span style={{ color: 'var(--cyan-mint)' }}>바이브코딩으로 안되는건 없습니다.</span><br />
              <br />
              소프트웨어나 IT 할 거 없이<br />
              원하는 모든 다 만들어드릴 수 있으며, <span style={{ color: 'var(--lightest-slate)' }}>원하는 날짜까지 맞춰드립니다.</span><br />
              <br />
              빠르고 정확하게 만들어드리니 <span style={{ color: 'var(--cyan-mint)' }}>안심하셔도 됩니다.</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-block px-8 py-5 rounded-2xl font-mono transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(77, 208, 225, 0.1), rgba(100, 255, 218, 0.1))',
                border: '2px solid rgba(77, 208, 225, 0.3)',
                color: 'var(--cyan-mint)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(77, 208, 225, 0.2), rgba(100, 255, 218, 0.2))';
                e.currentTarget.style.borderColor = 'var(--cyan-mint)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(77, 208, 225, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(77, 208, 225, 0.1), rgba(100, 255, 218, 0.1))';
                e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.3)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              프로젝트 확인하기!
            </a>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}
