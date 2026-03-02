import { useParams } from "react-router-dom"
import projects from "../data/projects"

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  return (
    <div className="container case-study">
      <h1>{project.title}</h1>

      <section>
        <h2>Challenge</h2>
        <p>{project.challenge}</p>
      </section>

      <section>
        <h2>Approach</h2>
        <p>{project.approach}</p>
      </section>

      <section>
        <h2>Results</h2>
        <ul>
          {project.results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default CaseStudy
