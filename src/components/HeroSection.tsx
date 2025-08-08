import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <AnimatedSection animationType="fade-in-up" triggerOnce={true}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              안녕하세요!
            </h1>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="200" triggerOnce={true}>
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8">
            바이브코딩으로 뭐든 다 만들어드리는 
            <span className="block mt-2 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              자바침입니다!
            </span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay="400" triggerOnce={true}>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">원하는걸 다 만들어드릴 수 있으며</span>
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-green-600 dark:text-green-400">원하는 날짜까지 맞춰드릴 수 있습니다!</span>
            </p>
            <p className="leading-relaxed text-xl md:text-2xl font-medium">
              <span className="text-blue-600 dark:text-blue-400">빠르고 정확하게</span> 만들어드리고 있으니 
              <span className="font-bold text-gray-900 dark:text-white"> 안심해주세요!</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="500" triggerOnce={true}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg transform"
            >
              프로젝트 보기
            </a>
            <a 
              href="#contact" 
              className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 hover:scale-105 hover:shadow-lg transform"
            >
              연락하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
