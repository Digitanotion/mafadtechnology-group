const SITE_URL = "https://mafadgroup.com";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nigeria", priority: 0.9, changeFrequency: "monthly" },
    { path: "/nigeria/mafad-technology", priority: 0.7, changeFrequency: "monthly" },
    { path: "/nigeria/coca-cola", priority: 0.7, changeFrequency: "monthly" },
    { path: "/nigeria/solar-energy", priority: 0.6, changeFrequency: "monthly" },
    { path: "/united-kingdom", priority: 0.9, changeFrequency: "monthly" },
    { path: "/united-kingdom/mafadtech-services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
