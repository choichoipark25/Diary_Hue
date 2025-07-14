/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 메인 컬러 팔레트
        "soft-sky-blue": "var(--color-main)",
        "cozy-pink": "var(--color-sub)",
        "cool-lavender": "var(--color-accent)",
        "deep-navy": "var(--color-text)",
        "soft-gray": "var(--color-text-sub)",

        // 배경 컬러
        "bg-primary": "var(--color-background-primary)",
        "bg-secondary": "var(--color-background-secondary)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        gowun: ["Gowun Dodum", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        korean: ["Gowun Dodum", "sans-serif"],
        english: ["Lato", "sans-serif"],
      },
      fontSize: {
        // 헤딩 크기들
        hero: ["42px", { lineHeight: "1.2", fontWeight: "700" }],
        "page-title": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title": ["22px", { lineHeight: "1.3", fontWeight: "700" }],
        "card-title": ["18px", { lineHeight: "1.3", fontWeight: "700" }],

        // 본문 크기들
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-small": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        poetry: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      maxWidth: {
        content: "860px",
        layout: "1440px",
      },
    },
  },
  plugins: [],
};
