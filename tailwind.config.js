module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2CA4D8",
          "secondary": "#111430",
          "accent": "#FFF8F5",
          "neutral": "#242424",
          "base-100": "#FFFFFF",
          "info": "#869EF4",
          "success": "#008140",
          "warning": "#E8D001",
          "error": "#E03D24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}