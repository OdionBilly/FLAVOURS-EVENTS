/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryregular: ['regular'],
        primarybold: ['Bold'],
        primarymedium: ['Medium'],
        PrimarySemiBold: ['SemiBold'],  
        primarylato_light: ['Lato-Light'],
      },
      backgroundImage:{
        About_image:"url('.public/botbg.png')",
        Service_Image:"url('.public/bgImg.png')",

      }

    },
  },
  plugins: [],
}

