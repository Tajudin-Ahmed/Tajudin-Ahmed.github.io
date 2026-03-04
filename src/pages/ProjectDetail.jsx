import { useParams } from "react-router-dom";
import projects from "../data/projects";
import CaseStudyLayout from "../components/CaseStudyLayout";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return <CaseStudyLayout project={project} />;
}
