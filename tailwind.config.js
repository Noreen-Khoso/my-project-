/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     fontFamily :{ "poppin" : "poppin"
      
     },
 
    extend: {},
    container :{
       center : true,
       padding : {
        default : '20px',
        md: "50px"
       }
    }
    },
  
  plugins: [],}


