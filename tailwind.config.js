/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerbackgroundcolor: "#FFFFFF",
        headertextcolor: "#8B0000",
        headertexthoverandactive: "#FF6F61",
        backgroundcolor: "#FFFFFF",
        primarytextcolor: "#8B0000",
        footerbackgrouncolor: "#8B0000",
        primary: "#8B0000", // Dark Red
        secondary: "#FF6F61", // Coral
        tertiary: "#C0C0C0", // Silver
        silver: "#C0C0C0",
        skyblue: "#D0E8FF",
        bordercolor: "#C0C0C0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, #D0E8FF 0%, #FFFFFF 100%)",
        "backgro-gradient":
          "linear-gradient(90deg, #FF6F61 0%, #C0C0C0 100%)",
        "backgro-gradient-revert":
          "linear-gradient(90deg, #C0C0C0 0%, #FF6F61 100%)",
      },
      boxShadow: {
        card: "0px 10px 30px -5px rgba(139, 0, 0, 0.1)",
        "card-hover": "0px 20px 40px -5px rgba(139, 0, 0, 0.2)",
        glow: "0 0 20px rgba(255, 111, 97, 0.5)",
      },
    },
  },
  plugins: [],
};
