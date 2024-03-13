/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideout: {
          from: {
            opacity: "1",
            transform: "translateY(0)"
          },
          to: {
            opacity: "0",
            transform: "translateY(-10px)",
          }
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slideout: "slideout 1s ease var(--slideout-delay, 0) forwards",
      },
    },
  },
  plugins: [],
}

