'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

// 예시 프로젝트 데이터 (나중에 실제 프로젝트로 교체)
const projects = [
  {
    id: 1,
    name: "골프상회",
    description: "골프 용품을 쉽게 검색하고 구매할 수 있는 이커머스 플랫폼입니다.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "골프 용품 쇼핑 경험 개선",
    whatLearned: "이커머스 플랫폼 구축 및 최적화",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://golf-wheat.vercel.app"
    },
    image: "/스크린샷 2025-10-06 213056.png"
  },
  {
    id: 2,
    name: "모든별 키즈",
    description: "우리 아이의 빛나는 잠재력, 최고의 전문가가 함께 찾아요. 아동 발달 전문가 매칭 플랫폼입니다.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "아동 발달 전문가 매칭 플랫폼 구축",
    whatLearned: "아동 발달 전문가 매칭 시스템 구축 및 최적화",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://momci.vercel.app"
    },
    image: "/스크린샷 2025-10-06 220030.png"
  },
  {
    id: 3,
    name: "봉평면옥",
    description: "정통 메밀의 깊은 향과 전통의 맛이 살아있는 메밀면 전문점 웹사이트입니다.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "전통 음식점 브랜딩 및 온라인 홍보 플랫폼 구축",
    whatLearned: "음식점 웹사이트 디자인 및 사용자 경험 최적화",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://bongpyeonmteonok2.vercel.app/"
    },
    image: "/스크린샷 2025-10-07 180211.png"
  },
  {
    id: 4,
    name: "FiniWatch",
    description: "FiniWatch와 함께 스트리밍의 새로운 경험을. 전 세계 최고의 영화와 시리즈를 무제한으로 만나보세요.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "스트리밍 플랫폼 UI/UX 구축 및 콘텐츠 관리 시스템",
    whatLearned: "대용량 미디어 콘텐츠 처리 및 반응형 웹 디자인",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://netflixz-pi.vercel.app/"
    },
    image: "/스크린샷 2025-10-07 182347.png"
  },
  {
    id: 5,
    name: "스타점 마케팅",
    description: "글로벌 마케팅 리더십을 구축하는 스타점 마케팅 그룹에서 혁신적인 마케팅 전문가를 도와드립니다. (마케팅 테스트용 서버)",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "마케팅 서비스 플랫폼 구축 및 테스트 환경 제공",
    whatLearned: "마케팅 도구 개발 및 A/B 테스팅 시스템 구축",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://proje-orcin.vercel.app/"
    },
    image: "/스크린샷 2025-10-07 183022.png"
  },
  {
    id: 6,
    name: "예시 프로젝트 6",
    description: "여섯 번째 프로젝트에 대한 설명입니다.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "풀스택 개발자",
    problemSolved: "해결한 문제 설명",
    whatLearned: "배운 점",
    links: {
      github: "https://github.com/Hamyoungmin",
      demo: "https://project6-demo.com"
    },
    image: "/placeholder-project.jpg"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);
  return (
    <section id="projects" className="py-20 lg:py-32 relative px-6 lg:px-24">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(77, 208, 225, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono whitespace-nowrap" 
                style={{ 
                  color: 'var(--white)',
                  textShadow: '0 0 20px rgba(77, 208, 225, 0.3)'
                }}>
              <span style={{ color: 'var(--cyan-mint)' }}>02.</span> 프로젝트
            </h2>
            <div className="h-[2px] w-full max-w-xs rounded-full" 
                 style={{ 
                   background: 'linear-gradient(90deg, var(--cyan-mint), transparent)'
                 }}></div>
          </div>
        </AnimatedSection>

        <div className="space-y-24">
          {displayedProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animationType="fade-in-up"
              delay={index < 2 ? (index * 200).toString() as "100" | "200" | "300" | "400" | "500" : undefined}
            >
              <div className={`grid grid-cols-12 gap-4 items-center ${index % 2 === 0 ? '' : 'direction-rtl'}`}>
                {/* 프로젝트 내용 */}
                <div className={`col-span-12 lg:col-span-7 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} z-10`}>
                  <p className="font-mono text-sm mb-2" style={{ color: 'var(--cyan-mint)' }}>Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--white)' }}>
                    {project.name}
                  </h3>
                  <div className="rounded-2xl p-6 mb-4 backdrop-blur-md" 
                       style={{ 
                         background: 'rgba(17, 34, 64, 0.4)',
                         border: '1px solid rgba(77, 208, 225, 0.1)',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                       }}>
                    {project.links.demo !== 'https://project-demo.com' && project.links.demo !== 'https://project2-demo.com' && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mb-3 font-mono text-sm transition-colors duration-200"
                        style={{ color: 'var(--cyan-mint)' }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        🔗 {project.links.demo.replace('https://', '')}
                      </a>
                    )}
                    <p className="text-base" style={{ color: 'var(--slate)' }}>
                      {project.description}
                    </p>
                  </div>
                  <ul className={`flex flex-wrap gap-4 font-mono text-xs mb-4 ${index % 2 === 0 ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.techStack.map((tech, i) => (
                      <li key={i} style={{ color: 'var(--slate)' }}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 0 ? 'justify-start' : 'lg:justify-end'}`}>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                       className="transition-all duration-200 hover:-translate-y-1"
                       style={{ color: 'var(--slate)' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-mint)'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                       className="transition-all duration-200 hover:-translate-y-1"
                       style={{ color: 'var(--slate)' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-mint)'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* 프로젝트 이미지 (배경) */}
                <div className={`col-span-12 lg:col-span-5 ${index % 2 === 0 ? 'lg:col-start-8' : 'lg:col-start-1 row-start-1'}`}>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="relative group block">
                    <div className="rounded-2xl overflow-hidden transition-all duration-300">
                      <div className="aspect-video relative" style={{ background: 'var(--light-navy)' }}>
                        {project.image && project.image !== '/placeholder-project.jpg' ? (
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-all duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold" 
                                 style={{ color: 'var(--lightest-slate)', opacity: 0.1 }}>
                              {project.id}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm rounded-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
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
              {showAll ? '접기' : '+ 더보기'}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
