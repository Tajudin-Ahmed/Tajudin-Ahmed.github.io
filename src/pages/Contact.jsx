import React from "react";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <div>
      <Seo
        title="Contact"
        description="Get in touch with Tajudin Ahmed, Data Analyst, for collaborations or project inquiries."
      />
      <h1>Contact</h1>
      <p>
        For collaborations, freelance analytics work, or project discussions,
        please connect with me via LinkedIn.
      </p>
      <p>
        LinkedIn: {" "}
        <a
          href="https://www.linkedin.com/in/tajudin-ahmed"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/tajudin-ahmed
        </a>
      </p>
    </div>
  );
}
