const defaultColors = require("tailwindcss/colors")

const sky = defaultColors.lightBlue
delete defaultColors.lightBlue
defaultColors.sky = sky

module.exports = {
   mode: "jit",
   purge: ["./**/*.tsx"],
   darkMode: "class", // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            ...defaultColors,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
