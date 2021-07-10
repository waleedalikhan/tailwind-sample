// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "app-green": "#94e3cb",
        "app-green-dark": "#18633c",
        "app-bg-light": "#f4fffa",
        "app-bg-secondary-green": "#64b89e",
        "checked-color": "#80d1a6",
        "edit-bg": "#eff2f8",
      },
      maxWidth: {
        1200: "1200px",
        990: "990px",
        750: "750px",
      },
      fontSize: {
        "13px": "13px",
        "15px": "15px",
        "10px": "10px",
      },
      boxShadow: {
        "checkbox-shadow": "inset 0px 2px 5px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
