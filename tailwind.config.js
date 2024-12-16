/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btnshadow: "-4px 6px 0px -2px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        customRedTitre: "#9F2727",
        customRedBorder: "#B76F61",
        customRedTextButton: "#9F2727",

        customYellowTitre: "#CE9061",
        customYellowBorder: "#D3AE60",
        customYellowTexteButton: "#7B5C18",

        customGreenTitre: "#1D5025",
        customGreenBorder: "#D3AE60",
        customGreenTexteButton: "#2A6934",
      },
      backgroundImage: {
        "custom-Redgradient": "linear-gradient(45deg, #FF9883, #FF6A4E)",
        "custom-Yellowgradient": "linear-gradient(45deg, #FFCD62, #FDB51A)",
        "custom-Greengradient": "linear-gradient(45deg, #79DC8A, #53F06B)",
      },
    },
  },
  safelist: [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-green-500",
  ],
  plugins: [],
};
