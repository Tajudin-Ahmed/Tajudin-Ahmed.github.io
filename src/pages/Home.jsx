import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Tajudin Ahmed | Data Analyst Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Tajudin Ahmed, showcasing data analytics projects, CMAM dashboards, and forecasting analysis."
        />
        <meta name="keywords" content="Data Analyst, CMAM, Dashboard, Analytics, Tableau, Python, SQL" />
        <meta name="author" content="Tajudin Ahmed" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Tajudin Ahmed | Data Analyst Portfolio" />
        <meta property="og:description" content="Explore data analytics projects including CMAM dashboards, forecasting models, and visualizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tajudin-ahmed.github.io" />
        <meta property="og:image" content="https://tajudin-ahmed.github.io/assets/images/portfolio-preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tajudin Ahmed | Data Analyst Portfolio" />
        <meta name="twitter:description" content="Explore data analytics projects including CMAM dashboards, forecasting models, and visualizations." />
        <meta name="twitter:image" content="https://tajudin-ahmed.github.io/assets/images/portfolio-preview.png" />
      </Helmet>

      <h1>Welcome to my portfolio!</h1>
      {/* Your homepage content */}
    </div>
  );
}
