import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        coal: "#111111",
        bronze: "#B87532",
        gold: "#D8B56D",
        beige: "#EFE3D2",
        ivory: "#FAF7F2"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,.22)"
      }
    }
  },
  plugins: []
};

export default config;
