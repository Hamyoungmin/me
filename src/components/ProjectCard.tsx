import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  role: string;
  problemSolved: string;
  whatLearned: string;
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

interface ProjectCardWrapperProps extends ProjectCardProps {
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardWrapperProps) {
  const hoverDirection = index % 2 === 0 ? 'hover-card-left' : 'hover-card-right';
  
  return (
    <div className={`glass-morphism rounded-xl overflow-hidden premium-shadow hover-glow hover-border card-3d tilt-3d ${hoverDirection}`}>
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            스크린샷 / GIF / 영상
          </div>
        </div>
        {/* 실제 이미지가 있을 때 사용
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
        */}
      </div>

      <div className="p-6">
        {/* 프로젝트 이름 */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.name}
        </h3>

        {/* 설명 */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 담당 역할 */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">담당 역할</h4>
          <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
        </div>

        {/* 해결한 문제 */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">해결한 문제</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{project.problemSolved}</p>
        </div>

        {/* 배운 점 */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">배운 점</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{project.whatLearned}</p>
        </div>

        {/* 링크들 */}
        <div className="flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 transform"
            >
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 transform"
            >
              데모 보기
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
