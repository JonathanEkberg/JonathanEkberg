module.exports = {
   mode: "jit",
   purge: ["./**/*.tsx"],
   darkMode: "class", // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            ...require("tailwindcss/colors"),
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
