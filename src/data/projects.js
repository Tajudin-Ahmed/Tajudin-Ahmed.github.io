const projects = [
  {
    id: "cmam-performance-analysis",
    title: "CMAM Performance Benchmarking Dashboard",
    shortDescription:
      "Automated analysis of OTP recovery, default, and mortality rates aligned with Sphere standards.",
    tools: ["Python", "SQL", "Tableau", "Excel"],
    image: "/images/cmam-dashboard.png",
    github: "https://github.com/yourusername/cmam-analysis",
    problem:
      "Nutrition programs lacked automated benchmarking against Sphere recovery thresholds.",
    methodology:
      "Data cleaning in Python, SQL aggregation, KPI calculation, visualization in Tableau.",
    results:
      "Reduced reporting preparation time by 60% and improved anomaly detection.",
  },

  {
    id: "food-security-forecasting",
    title: "Food Security Risk Forecast Model",
    shortDescription:
      "Time-series modeling to predict food insecurity risk trends.",
    tools: ["Python", "Pandas", "Scikit-Learn"],
    image: "/images/food-security.png",
    github: "https://github.com/yourusername/food-risk-model",
    problem:
      "Delayed identification of deteriorating food security conditions.",
    methodology:
      "EDA, seasonal decomposition, Random Forest regression.",
    results:
      "Improved early warning detection by 25%.",
  },

  {
    id: "healthcare-kpi-dashboard",
    title: "Healthcare KPI SQL Reporting System",
    shortDescription:
      "Automated SQL reporting engine for hospital performance monitoring.",
    tools: ["SQL", "Power BI"],
    image: "/images/health-kpi.png",
    github: "https://github.com/yourusername/health-kpi",
    problem:
      "Manual reporting processes caused delays in decision-making.",
    methodology:
      "SQL stored procedures + Power BI dashboard layer.",
    results:
      "Reduced reporting cycle from 5 days to 1 day.",
  }
];

export default projects;
