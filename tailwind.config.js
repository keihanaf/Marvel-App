/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%, 100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            transform: "translateX(100%)",
            opacity: "0.3",
          },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        shimmer: "shimmer 8s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
