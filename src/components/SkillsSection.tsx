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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            기술 스택 & Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            사용하는 언어, 프레임워크, 도구들을 시각적으로 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 기술 스택을 위한 공간 */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              여기에 추가 기술들을 넣어주세요
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              위의 skillCategories 배열에 새로운 기술들을 추가하거나<br />
              새로운 카테고리를 만들어 기술 스택을 확장할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
