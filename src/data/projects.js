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
  },

  {
    id: "supply-chain-loss-monitoring",
    title: "Supply Chain Loss Monitoring Dashboard",
    shortDescription:
      "Automated tracking of commodity losses and spoilage patterns across distribution hubs.",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    image: "/images/supply-chain-loss.png",
    github: "https://github.com/yourusername/supply-chain-loss-monitoring",
    problem:
      "Program teams lacked timely visibility into post-distribution losses and high-risk locations.",
    methodology:
      "ETL pipeline in Python, SQL-based aggregation, and interactive KPI dashboards in Power BI.",
    results:
      "Reduced monthly loss-reporting lag by 70% and enabled targeted interventions in top-risk hubs.",
  },

  {
    id: "malnutrition-hotspot-mapping",
    title: "Malnutrition Hotspot Mapping and Alert System",
    shortDescription:
      "Geo-analytics workflow to detect and prioritize high-risk malnutrition clusters.",
    tools: ["Python", "GeoPandas", "QGIS", "Tableau"],
    image: "/images/malnutrition-hotspots.png",
    github: "https://github.com/yourusername/malnutrition-hotspot-mapping",
    problem:
      "Response planning was delayed by fragmented spatial data and manual hotspot identification.",
    methodology:
      "Spatial joins, district-level risk scoring, and threshold-based alerting integrated into dashboards.",
    results:
      "Improved hotspot targeting accuracy by 30% and shortened planning cycles from weeks to days.",
  },

  {
    id: "donor-reporting-automation",
    title: "Donor Reporting Automation Pipeline",
    shortDescription:
      "End-to-end automation of donor indicator extraction, validation, and report generation.",
    tools: ["Python", "SQL", "Pandas", "PowerPoint API"],
    image: "/images/donor-reporting.png",
    github: "https://github.com/yourusername/donor-reporting-automation",
    problem:
      "Manual donor reporting consumed significant analyst time and introduced consistency issues.",
    methodology:
      "Automated data pulls, validation rules, indicator calculations, and templated narrative/chart export.",
    results:
      "Cut report preparation time by 65% while improving indicator consistency across reporting periods.",
  },
];

export default projects;
