/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tb: "#000000",
        main_red: "#FF0031",
        second_red: "#DA4040",
        st_delivered_text: "#1F9254",
        st_delivered_bg: "#EBF9F1",
        st_process_text: "#CD6200",
        st_process_bg: "#FEF2E5",
        st_pending_text: "#FFB900",
        st_pending_bg: "#FEF8E5",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
