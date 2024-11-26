import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-top':"#10001D",
        'custom-bottom':"#1E0039",
        'custom-text-color':"#DBDAFFBF",
        'custom-card-bg':'#B4A0FF28',
        'custom-footer-bg':'#31005D',
      },
    },
  },
  plugins: [],
} satisfies Config;
