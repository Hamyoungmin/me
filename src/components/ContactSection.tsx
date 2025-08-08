import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 geometric-bg">
      <div className="max-w-4xl mx-auto px-6 perspective-1000">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 neon-glow">
              연락처
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              프로젝트 문의나 협업 제안은 언제든 환영합니다!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 연락 방법들 */}
          <div className="space-y-6">
            <AnimatedSection animationType="fade-in-left" delay="200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                연락 방법
              </h3>
            </AnimatedSection>
            
            {/* 이메일 */}
            <AnimatedSection animationType="fade-in-left" delay="300">
              <div className="glass-morphism rounded-xl p-6 premium-shadow hover-card-left hover-glow hover-border card-3d float">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">이메일</h4>
                  <a 
                    href="mailto:your-email@example.com" 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg"
                  >
                    your-email@example.com
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* GitHub */}
            <AnimatedSection animationType="fade-in-left" delay="400">
              <div className="glass-morphism rounded-xl p-6 premium-shadow hover-card-left hover-glow hover-border card-3d float-delay-1">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">GitHub</h4>
                  <a 
                    href="https://github.com/Hamyoungmin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg"
                  >
                    github.com/Hamyoungmin
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* 기타 링크들 */}
            <AnimatedSection animationType="fade-in-left" delay="500">
              <div className="glass-morphism rounded-xl p-6 premium-shadow hover-card-left hover-glow hover-border card-3d float-delay-2">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">기타 링크</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    LinkedIn, 블로그, 포트폴리오 등
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* 간단한 연락 폼 */}
          <AnimatedSection animationType="fade-in-right" delay="200">
            <div className="glass-morphism rounded-xl p-6 premium-shadow hover-card-right hover-glow hover-border card-3d tilt-3d">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                빠른 연락
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    메시지
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="프로젝트에 대해 자세히 설명해주세요"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg btn-3d premium-shadow hologram"
                >
                  메시지 보내기
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  보통 24시간 이내에 답변드립니다
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
