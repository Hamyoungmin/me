import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center premium-gradient geometric-bg relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-300/20 rounded-full float-delay-1"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full float-delay-2"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-300/10 rounded-full float"></div>
      
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10 perspective-1000">
        <AnimatedSection animationType="fade-in-up" triggerOnce={true}>
          <div className="mb-8 tilt-3d">
            <h1 className="text-5xl md:text-7xl font-bold text-white neon-glow mb-6 float">
              안녕하세요!
            </h1>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="200" triggerOnce={true}>
          <div className="glass-morphism rounded-2xl p-8 mb-8 premium-shadow">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              바이브코딩으로 뭐든 다 만들어드리는 
              <span className="block mt-2 text-4xl md:text-5xl font-bold text-white neon-glow">
                자바침입니다!
              </span>
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="400" triggerOnce={true}>
          <div className="glass-morphism rounded-xl p-6 premium-shadow float-delay-1">
            <div className="space-y-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
              <p className="leading-relaxed">
                <span className="font-semibold text-yellow-300 hologram">원하는걸 다 만들어드릴 수 있으며</span>
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-green-300 hologram">원하는 날짜까지 맞춰드릴 수 있습니다!</span>
              </p>
              <p className="leading-relaxed text-xl md:text-2xl font-medium">
                <span className="text-blue-300 hologram">빠르고 정확하게</span> 만들어드리고 있으니 
                <span className="font-bold text-white neon-glow"> 안심해주세요!</span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="500" triggerOnce={true}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center perspective-1000">
            <a 
              href="#projects" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg text-lg btn-3d premium-shadow hologram"
            >
              프로젝트 보기
            </a>
            <a 
              href="#contact" 
              className="inline-block glass-morphism text-white font-semibold py-4 px-8 rounded-lg text-lg btn-3d premium-shadow border border-white/20"
            >
              연락하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
