/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], //belirtilen klasör altındaki bütün klasörleri (html,css vs) kapsa
  theme: {
    //tüm container ler için default özellikler
    container:{
      center:true,
    },
    extend: {
      //kendi kullanmak istediğimiz fontlar
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
      },
      colors:{
        'tgray':'#444353',
        'tblue':'#00aaf6'
      }
    },
  },
  plugins: [],
}

