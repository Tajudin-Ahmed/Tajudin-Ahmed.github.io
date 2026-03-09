import React from "react";
import Seo from "../components/Seo";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Seo
        title="Home"
        description="Welcome to the data analytics portfolio of Tajudin Ahmed, featuring CMAM analysis, dashboards, and forecasting projects."
      />
      <h1>Welcome to my Portfolio</h1>
      <p>
        I am <strong>Tajudin Ahmed</strong>, a Data Analyst focused on nutrition,
        humanitarian, and public health analytics. I build decision-support
        dashboards, automate reporting pipelines, and develop forecasting models
        using Python, SQL, Tableau, and Power BI. Learn more in my{" "}
        <a href="/aboutme.md">About Me</a> page.
      </p>
      <p>
        Connect with me on LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/tajudin-ahmed"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/tajudin-ahmed
        </a>
      </p>

      <section className="container">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
