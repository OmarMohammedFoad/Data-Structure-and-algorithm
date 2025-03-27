/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./view/**/*.ejs", // Scan all EJS files in the views folder
      "./public/**/*.js",  // Include any JS files (if needed)
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  