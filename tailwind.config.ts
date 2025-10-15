import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto)", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#0f7b5c",
          yellow: "#f8e81c",
          orange: "#f16a2d",
          navy: "#1d2935",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 123, 92, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
