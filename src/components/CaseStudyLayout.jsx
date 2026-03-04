export default function CaseStudyLayout({ project }) {
  return (
    <div className="case-study">
      <h1>{project.title}</h1>

      <img src={project.image} alt={project.title} />

      <section>
        <h2>Problem Statement</h2>
        <p>{project.problem}</p>
      </section>

      <section>
        <h2>Methodology</h2>
        <p>{project.methodology}</p>
      </section>

      <section>
        <h2>Results & Impact</h2>
        <p>{project.results}</p>
      </section>

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}
