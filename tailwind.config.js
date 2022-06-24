module.exports = {
 content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    colors: {
      "primary": "#F63E7B",         
      "secondary": "#111430",             
      "accent": "#FFF8F5",             
      "neutral": "#2D2D2D",             
      "base-100": "#FFFFFF",             
      "info": "#869EF4",             
      "success": "#008140",              
      "warning": "#E8D001",              
      "error": "#E03D24",
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}