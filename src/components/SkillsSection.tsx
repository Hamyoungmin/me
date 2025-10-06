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
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animationType="fade-in-up">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono whitespace-nowrap" 
                style={{ color: 'var(--white)' }}>
              <span style={{ color: 'var(--cyan-mint)' }}>03.</span> Skills
            </h2>
            <div className="h-[1px] w-full max-w-xs" style={{ background: 'var(--lightest-navy)' }}></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              animationType="fade-in-up"
              delay={(categoryIndex * 100).toString() as "100" | "200" | "300" | "400" | "500"}
            >
              <div className="rounded p-6 border transition-all duration-300 hover:-translate-y-2"
                   style={{ 
                     background: 'var(--light-navy)',
                     borderColor: 'var(--lightest-navy)'
                   }}>
                <h3 className="text-xl font-bold mb-6 font-mono" 
                    style={{ color: 'var(--cyan-mint)' }}>
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center justify-between font-mono text-sm">
                      <span style={{ color: 'var(--slate)' }}>
                        <span style={{ color: 'var(--cyan-mint)' }}>▹ </span>
                        {skill.name}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--slate)' }}>
                        {skill.level}%
                      </span>
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
            <p className="text-lg" style={{ color: 'var(--slate)' }}>
              계속해서 새로운 기술을 배우고 성장하고 있습니다
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
