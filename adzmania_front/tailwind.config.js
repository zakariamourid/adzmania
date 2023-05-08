/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tb: "#000000",
        main_red: "#EF2F1D",
        second_red: "#DA4040",
        backgroud_light_red: "#ff0031",
        st_delivered_text: "#1F9254",
        st_delivered_bg: "#EBF9F1",
        st_process_text: "#CD6200",
        st_process_bg: "#FEF2E5",
        st_pending_text: "#FFB900",
        st_pending_bg: "#FEF8E5",
        dark_cards: "#7B6969",
        primary_dark_bg: "#403636",
        adzmania_red: "#EF2F1D",
        // logo_color:242 47 29;
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
