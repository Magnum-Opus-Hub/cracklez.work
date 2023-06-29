/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        //we want the video that is 4 seconds long to slowly fade in and out for 4 seconds
        "fade-in-out": {
          "0%": {
            opacity: "0",
      },
      "50%": {
        opacity: "1",
      },
      "100%": {
        opacity: "0",
      },
    },
  },
      animation: {
        "fade-in-out": "fade-in-out 4s ease-in-out infinite",


    },
  },
  plugins: [],
}
}