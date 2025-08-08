import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              어떤 기술을 다루는지에 대해서 알아보세요
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 프로필 정보 */}
          <AnimatedSection animationType="fade-in-left" delay="200">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover-card-left hover-glow hover-border">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-200 dark:border-indigo-800">
                  <Image
                    src="/증명사진.jpg"
                    alt="자바침 프로필 사진"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  자바침
                </h3>
                <p className="text-center text-indigo-600 dark:text-indigo-400 font-semibold">
                  바이브코딩 개발자
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">창의적인 문제 해결</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">빠른 개발 속도</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">정확한 요구사항 이해</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">다양한 기술 스택 활용</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 오른쪽: 기술 설명 */}
          <div className="space-y-6">
            <AnimatedSection animationType="fade-in-right" delay="300">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover-card-right hover-glow hover-border">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  기술 전문성
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    바이브코딩으로 모든걸 다 만들어드리며
                  </span>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    정확하고 빠른 시일내에 만들어드립니다!
                  </span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in-right" delay="400">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover-card-right hover-glow hover-border">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  개발 철학
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>클라이언트의 요구사항을 정확히 파악하고 구현</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>최신 기술을 활용한 효율적인 개발</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>사용자 경험을 최우선으로 고려한 디자인</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>지속적인 학습과 기술 발전</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
