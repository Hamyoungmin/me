import AnimatedSection from './AnimatedSection';

// 예시 기술 스택 데이터 (실제 기술들로 교체해주세요)
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative px-6 lg:px-24">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%)',
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
              <span style={{ color: 'var(--cyan-mint)' }}>03.</span> Skills
            </h2>
            <div className="h-[2px] w-full max-w-xs rounded-full" 
                 style={{ 
                   background: 'linear-gradient(90deg, var(--cyan-mint), transparent)'
                 }}></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              animationType="fade-in-up"
              delay={(categoryIndex * 100).toString() as "100" | "200" | "300" | "400" | "500"}
            >
              <div className="rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:scale-105 group"
                   style={{ 
                     background: 'rgba(17, 34, 64, 0.4)',
                     border: '1px solid rgba(77, 208, 225, 0.1)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.3)';
                     e.currentTarget.style.boxShadow = '0 0 40px rgba(77, 208, 225, 0.2)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = 'rgba(77, 208, 225, 0.1)';
                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                   }}>
                <h3 className="text-xl font-bold mb-6 font-mono" 
                    style={{ 
                      color: 'var(--cyan-mint)',
                      textShadow: '0 0 10px rgba(77, 208, 225, 0.3)'
                    }}>
                  {category.title}
                </h3>
                
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <div className="flex items-center justify-between font-mono text-sm mb-2">
                        <span style={{ color: 'var(--slate)' }}>
                          <span style={{ color: 'var(--cyan-mint)' }}>▹ </span>
                          {skill.name}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--light-slate)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" 
                           style={{ background: 'rgba(77, 208, 225, 0.1)' }}>
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, var(--cyan-mint), var(--green))',
                            boxShadow: '0 0 10px rgba(77, 208, 225, 0.5)'
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 추가 기술 스택 */}
        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="mt-16 text-center">
            <p className="text-xl" style={{ 
              color: 'var(--slate)',
              textShadow: '0 0 20px rgba(77, 208, 225, 0.1)'
            }}>
              계속해서 새로운 기술을 배우고 성장하고 있습니다 ✨
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
