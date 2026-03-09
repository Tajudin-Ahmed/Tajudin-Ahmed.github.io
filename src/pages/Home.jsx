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
      <p>This is the home page showcasing my skills and projects.</p>

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
