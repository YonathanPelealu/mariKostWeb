import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2196F3",
          dark: "#1976D2",
          light: "#BBDEFB",
          50: "#E3F2FD",
          100: "#BBDEFB",
          500: "#2196F3",
          700: "#1976D2",
        },
        secondary: {
          DEFAULT: "#FF9800",
          dark: "#F57C00",
          light: "#FFE0B2",
        },
        success: "#4CAF50",
        danger: "#F44336",
        warning: "#FFC107",
        neutral: {
          50: "#F5F5F5",
          200: "#E0E0E0",
          600: "#757575",
          900: "#212121",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1976D2 0%, #2196F3 50%, #42A5F5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
