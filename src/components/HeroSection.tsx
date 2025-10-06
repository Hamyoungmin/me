import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-24 pt-40">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedSection animationType="fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2" 
              style={{ color: 'var(--white)' }}>
            안녕하세요.<br />
            저는 자바침입니다!
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="100">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8" 
              style={{ color: 'var(--slate)' }}>
            빠른 결과물, 확실한 만족
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="200">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: 'var(--slate)' }}>
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
              className="inline-block border px-8 py-5 rounded font-mono transition-all duration-300 hover:-translate-y-1 text-center"
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
              프로젝트 확인하기!
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
