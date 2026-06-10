import { Project } from "@/src/types";
import { ProjectGlyph } from "./ProjectGlyph";
import { ExternalLinkIcon, GitBranch } from "lucide-react";
import Tag from "./Tag";

interface ProjectCardType {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardType) => {
  return (
    <article className="project">
      <div className="project_top flex items-center justify-between mb-3">
        <span className="project__glyph">
          <ProjectGlyph name={project.glyph} />
        </span>
        <span className="font-mono text-text-muted text-sm">{project.year}</span>
      </div>
      <h3 className="project__title mb-1.5">{project.title}</h3>
      <p className="project__desc">{project.description}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="project__links flex items-center pt-10 border-t border-border-dark gap-10">
        <a className="plink" href={project.github} target="_blank" rel="noopener noreferrer">
          <GitBranch />
          Code
        </a>
        <a className="plink plink--demo" href={project.demo} target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon />
          Live demo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
