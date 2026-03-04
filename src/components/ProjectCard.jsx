import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>

      <div className="tools">
        {project.tools.map((tool, index) => (
          <span key={index} className="badge">
            {tool}
          </span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="btn btn-primary">
        View Case Study
      </Link>
    </div>
  );
}
