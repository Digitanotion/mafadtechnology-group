export default function manifest() {
  return {
    name: "MAFAD Group Limited",
    short_name: "MAFAD Group",
    description:
      "MAFAD Group Limited - One Group. Many Solutions. Greater Impact.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A2E4D",
    theme_color: "#0A2E4D",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
