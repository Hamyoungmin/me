'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    id: 1,
    question: "프로젝트 기간은 얼마나 걸리나요?",
    answer: (
      <>
        프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로{' '}
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>소규모 프로젝트는 1-3주</span>,{' '}
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>중소 규모는 1-2개월</span>,{' '}
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>대규모는 3-5개월</span> 정도 소요됩니다. 정확한 일정은 상담 후 결정됩니다.
      </>
    )
  },
  {
    id: 2,
    question: "어떤 기술 스택을 사용하시나요?",
    answer: (
      <>
        주로 사용하는 기술은 <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>바이브코딩</span>이며, 
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}> React, Next.js, TypeScript, Tailwind CSS, Node.js, Python</span> 등을 활용합니다. 
        프로젝트 요구사항에 따라 최적의 기술 스택을 제안드립니다.
      </>
    )
  },
  {
    id: 3,
    question: "비용은 어떻게 책정되나요?",
    answer: (
      <>
        프로젝트의 범위, 기능, 복잡도에 따라 견적이 달라집니다. 
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}> 초기 상담</span>을 통해 요구사항을 파악한 후 
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}> 합리적인 비용</span>을 제안드립니다. 
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}> 합리적이고 정확한 비용 산정</span>을 원칙으로 합니다.
      </>
    )
  },
  {
    id: 4,
    question: "유지보수 서비스도 제공하나요?",
    answer: (
      <>
        네, 프로젝트 완료 후에도 <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>지속적인 유지보수 및 업데이트 서비스</span>를 제공합니다.<br />
        버그 수정, 기능 개선, 성능 최적화 등 다양한 지원이 가능합니다.
      </>
    )
  },
  {
    id: 5,
    question: "반응형 웹 디자인을 지원하나요?",
    answer: (
      <>
        물론입니다! 모든 프로젝트는 기본적으로 <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>반응형 웹 디자인</span>을 적용하여<br />
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>PC, 태블릿, 모바일</span> 등 
        모든 디바이스에서 최적화된 경험을 제공합니다.
      </>
    )
  },
  {
    id: 6,
    question: "협업은 어떻게 진행되나요?",
    answer: (
      <>
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>카카오톡, 이메일, 화상회의</span> 등 편한 방법으로 소통합니다.<br />
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}>정기적인 진행상황 공유</span>와 피드백을 통해 
        <span style={{ color: 'var(--cyan-mint)', fontWeight: 'bold' }}> 정확하게</span> 프로젝트를 진행합니다.
      </>
    )
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 relative px-6 lg:px-24">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(77, 208, 225, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono whitespace-nowrap" 
                style={{ 
                  color: 'var(--white)',
                  textShadow: '0 0 20px rgba(77, 208, 225, 0.3)'
                }}>
              <span style={{ color: 'var(--cyan-mint)' }}>04.</span> FAQ
            </h2>
            <div className="h-[2px] w-full max-w-xs rounded-full" 
                 style={{ 
                   background: 'linear-gradient(90deg, var(--cyan-mint), transparent)'
                 }}></div>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-in-up" delay="100">
          <p className="text-lg md:text-xl mb-12 text-center" style={{ color: 'var(--slate)' }}>
            자주 묻는 질문들을 모았습니다
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection 
              key={faq.id} 
              animationType="fade-in-up"
              delay={((index + 2) * 100).toString() as "100" | "200" | "300" | "400" | "500"}
            >
              <div 
                className="rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(17, 34, 64, 0.4)',
                  border: '1px solid rgba(77, 208, 225, 0.1)',
                  boxShadow: openId === faq.id ? '0 0 30px rgba(77, 208, 225, 0.2)' : '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => toggleFAQ(faq.id)}
                onMouseEnter={(e) => {
                  if (openId !== faq.id) {
                    e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openId !== faq.id) {
                    e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.1)';
                  }
                }}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold pr-4" 
                      style={{ color: openId === faq.id ? 'var(--cyan-mint)' : 'var(--lightest-slate)' }}>
                    <span style={{ color: 'var(--cyan-mint)' }}>Q. </span>
                    {faq.question}
                  </h3>
                  <div 
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: openId === faq.id ? 'rgba(77, 208, 225, 0.2)' : 'rgba(77, 208, 225, 0.1)',
                      transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--cyan-mint)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openId === faq.id ? '500px' : '0',
                    opacity: openId === faq.id ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div 
                      className="p-4 rounded-xl"
                      style={{
                        background: 'rgba(77, 208, 225, 0.05)'
                      }}
                    >
                      <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--slate)' }}>
                        <span style={{ color: 'var(--cyan-mint)' }}>A. </span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="mt-12 text-center">
            <p className="text-lg mb-6" style={{ color: 'var(--slate)' }}>
              더 궁금한 점이 있으신가요?
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 rounded-2xl font-mono transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
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
              문의하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

