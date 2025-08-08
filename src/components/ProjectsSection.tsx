import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

// 예시 프로젝트 데이터 (나중에 실제 프로젝트로 교체)
const projects = [
  {
    id: 1,
    name: "예시 프로젝트 1",
    description: "이곳에 프로젝트 핵심 설명을 간단하게 작성해주세요.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    role: "풀스택 개발자 (혼자 진행)",
    problemSolved: "해결한 문제에 대한 설명",
    whatLearned: "이 프로젝트를 통해 배운 점들",
    links: {
      github: "https://github.com/username/project",
      demo: "https://project-demo.com"
    },
    image: "/placeholder-project.jpg"
  },
  {
    id: 2,
    name: "예시 프로젝트 2",
    description: "두 번째 프로젝트 설명을 여기에 작성해주세요.",
    techStack: ["Vue.js", "Python", "Django", "PostgreSQL"],
    role: "프론트엔드 개발자 (팀 프로젝트)",
    problemSolved: "해결한 문제에 대한 설명",
    whatLearned: "이 프로젝트를 통해 배운 점들",
    links: {
      github: "https://github.com/username/project2",
      demo: "https://project2-demo.com"
    },
    image: "/placeholder-project.jpg"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-800 geometric-bg">
      <div className="max-w-7xl mx-auto px-6 perspective-1000">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 neon-glow">
              프로젝트
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              바이브코딩으로 직접 만든 프로그램, 앱, 웹사이트, 툴들을 소개합니다
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animationType={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
              delay={index < 2 ? (index * 200).toString() as "100" | "200" | "300" | "400" | "500" : undefined}
            >
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="fade-in-up" delay="400">
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              더 많은 프로젝트는 GitHub에서 확인하실 수 있습니다
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
