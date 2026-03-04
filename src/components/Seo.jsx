import React from "react";
import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, image, url }) {
  const defaultTitle = "Tajudin Ahmed | Data Analyst Portfolio";
  const defaultDescription =
    "Portfolio showcasing data analytics projects, CMAM dashboards, and forecasting analysis.";
  const defaultImage = "https://tajudin-ahmed.github.io/assets/images/portfolio-preview.png";
  const defaultUrl = "https://tajudin-ahmed.github.io";

  return (
    <Helmet>
      <title>{title ? `${title} | Tajudin Ahmed` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content="Data Analyst, CMAM, Dashboard, Analytics, Tableau, Python, SQL" />
      <meta name="author" content="Tajudin Ahmed" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content={title ? `${title} | Tajudin Ahmed` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Tajudin Ahmed` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
