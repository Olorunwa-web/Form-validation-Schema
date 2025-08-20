// tailwind.config.js
module.exports = {
    darkMode: "class", 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkBg: "#232428",
          lightBg: "#E7E6E9",
        },
      },
    },
    plugins: [],
  };