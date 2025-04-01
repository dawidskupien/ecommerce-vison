import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1068px",
      xl: "1335px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".813rem",
      base: ".938rem",
      lg: "1.063rem",
      xl: "1.25rem",
      "2xl": "1.75rem",
      "3xl": "2.125rem",
      "4xl": "2.625rem",
    },
    extend: {
      colors: {
        "primary-blue": "#3F72E5",
        typography: "#ffffff",
        typographyDark: "#303c43",
        background: "#f5f5f5",
        colorLinks: "#d6d8d9",
        backgroundLinks: "#787c80",
        borderColor: "#E2E2E2",
        badgeColor: "#d3ece2",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "solid-line": "0px 1px 0px 0px rgba(217, 220, 224, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        announcementBar: "var(--announcement-bar-height)",
        navigationTopBar: "var(--navigation-top-bar-height)",
        navigation: "var(--navigation-height-desktop)",
        navigationMobile: "var(--navigation-height-mobile)",
        header: "var(--header-height)",
        page: "calc(100vh - var(--header-height))",
      },
    },
  },
  plugins: [],
};
export default config;
