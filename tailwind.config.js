/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        default: "var(--color-primary-default)",
        light: "var(--color-primary-light)",
        dark: "var(--color-primary-dark)",
      },
      secondary: {
        light: "var(--color-secondary-light)",
        dark: "var(--color-secondary-dark)",
      },
      neutral: {
        white: "var(--color-neutral-white)",
        black: "var(--color-neutral-black)",
        grey: "var(--color-neutral-grey)",
      },
      black: "var(--color-black)",
    },
    fontSize: {
      10: "0.625rem",
      11: "0.6875rem",
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      28: "1.75rem",
      30: "1.875rem",
      34: "2.125rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
