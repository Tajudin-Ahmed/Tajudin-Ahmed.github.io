import { Link } from "react-router-dom"

function CaseStudyCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <Link to={`/project/${project.slug}`} className="btn">
        View Case Study
      </Link>
    </div>
  )
}

export default CaseStudyCard
