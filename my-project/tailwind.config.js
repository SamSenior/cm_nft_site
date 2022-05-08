const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-purple": "var(--clr-purple)",
        "brand-pink": "var(--clr-pink)",
        "brand-yellow": "var(--clr-yellow)",
        "brand-blue": "var(--clr-blue)",
        "brand-green": "var(--clr-green1)",
        "brand-green": "var(--clr-green2)",
        "brand-green": "var(--clr-green3)",
        "brand-green": "var(--clr-green4)",
        "brand-light": "var(--clr-light)",
        "brand-peach": "var(--clr-peach)",
        "brand-swamp": "var(--clr-swamp)",
        "brand-turq": "var(--clr-light)",

        "brand-background": "var(--clr-background)"
      },
      animation: {
        "pulse-slow": "pulse 9s linear infinite"
      }
    }
  },
  plugins: []
};
