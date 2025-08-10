import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100/50 backdrop-blur-sm relative overflow-hidden">

      
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              안녕하세요!
            </h1>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="200">
          <div className="glass-morphism rounded-2xl p-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
              바이브코딩으로 뭐든 다 만들어드리는 
              <span className="block mt-2 text-4xl md:text-5xl font-bold text-black">
                자바침입니다!
              </span>
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="300">
          <div className="glass-morphism rounded-xl p-6">
            <div className="space-y-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              <AnimatedSection animationType="fade-in-up" delay="100">
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">원하는걸 다 만들어드릴 수 있으며</span>
                </p>
              </AnimatedSection>
              <AnimatedSection animationType="fade-in-up" delay="200">
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">원하는 날짜까지 맞춰드릴 수 있습니다!</span>
                </p>
              </AnimatedSection>
              <AnimatedSection animationType="fade-in-up" delay="300">
                <p className="leading-relaxed text-xl md:text-2xl font-medium">
                  <span className="text-black">빠르고 정확하게</span> 만들어드리고 있으니 
                  <span className="font-bold text-black"> 안심해주세요!</span>
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg text-lg"
            >
              프로젝트 보기
            </a>
            <a 
              href="#contact" 
              className="inline-block glass-morphism text-black font-semibold py-4 px-8 rounded-lg text-lg border border-black/20"
            >
              연락하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
