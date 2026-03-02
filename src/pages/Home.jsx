import { Helmet } from "react-helmet-async"
import CaseStudyCard from "../components/CaseStudyCard"
import projects from "../data/projects"

function Home() {
  return (
    <div className="container">

      <Helmet>
        <title>Tajudin | Data Analyst | Humanitarian Analytics</title>
        <meta name="description" content="Data Analyst specializing in Monitoring & Evaluation, Nutrition, Healthcare and Food Security analytics." />
      </Helmet>

      <section className="hero">
        <h1>Data-Driven Decision Support for Humanitarian Programs</h1>
        <p>
          8+ years transforming complex datasets into actionable insights
          aligned with Sphere standards and operational KPIs.
        </p>
      </section>

      <section>
        <h2>Selected Case Studies</h2>
        <div className="grid">
          {projects.map(project => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
