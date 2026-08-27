const SITE_URL = "https://mafadgroup.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/investor-relations", "/partners"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
