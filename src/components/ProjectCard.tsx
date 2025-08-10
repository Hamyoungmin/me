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
    <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20">
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 text-lg">
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
        <h3 className="text-2xl font-bold text-black mb-3">
          {project.name}
        </h3>

        {/* 설명 */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="mb-4">
          <h4 className="font-semibold text-black mb-2">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 담당 역할 */}
        <div className="mb-4">
          <h4 className="font-semibold text-black mb-1">담당 역할</h4>
          <p className="text-gray-600">{project.role}</p>
        </div>

        {/* 해결한 문제 */}
        <div className="mb-4">
          <h4 className="font-semibold text-black mb-1">해결한 문제</h4>
          <p className="text-gray-600 text-sm">{project.problemSolved}</p>
        </div>

        {/* 배운 점 */}
        <div className="mb-6">
          <h4 className="font-semibold text-black mb-1">배운 점</h4>
          <p className="text-gray-600 text-sm">{project.whatLearned}</p>
        </div>

        {/* 링크들 */}
        <div className="flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              데모 보기
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
