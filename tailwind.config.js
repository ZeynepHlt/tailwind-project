/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], //belirtilen klasör altındaki bütün klasörleri (html,css vs) kapsa
  theme: {
    //tüm container ler için default özellikler
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',

      }
    },
    extend: {
      //kendi kullanmak istediğimiz fontlar
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
      },
      colors:{
        'tgray':'#B0B0B0',
        'tpurple':'#660033'
      },
      spacing:{
        /*h-96 ya kadardır o yüzden daha fazlası için tanımlama yaparız */
      128:'32rem', //512px
      }
    },
   
  },
  plugins: [],
}

