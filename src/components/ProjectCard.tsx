import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-300">
      <h3 className="font-bold text-lg">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>

      <div className="flex gap-2 mt-2">
        {project.tags.map((tag) =>(
            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                {tag}
            </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a href={project.githubUrl} target="_blank" className="text-blue-600 font-medium transition-colors hover:text-blue-800">Github</a>
        {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="text-green-600 font-medium">Live Demo</a>
        )}
      </div>
    </div>
  );
};
