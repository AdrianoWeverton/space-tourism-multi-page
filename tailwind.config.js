module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url(src/assets/home/background-home-desktop.jpg)",
        'home-tablet': "url(src/assets/home/background-home-tablet.jpg)",
        'home-mobile': "url(src/assets/home/background-home-mobile.jpg)",
        'crew-desktop': "url(src/assets/crew/background-crew-desktop.jpg)",
        'crew-tablet': "url(src/assets/crew/background-crew-tablet.jpg)",
        'crew-mobile': "url(src/assets/crew/background-crew-mobile.jpg)",
        'destination-desktop': "url(src/assets/destination/background-destination-desktop.jpg)",
        'destination-tablet': "url(src/assets/destination/background-destination-tablet.jpg)",
        'destination-mobile': "url(src/assets/destination/background-destination-mobile.jpg)",
        'technology-desktop': "url(src/assets/technology/background-technology-desktop.jpg)",
        'technology-tablet': "url(src/assets/technology/background-technology-tablet.jpg)",
        'technology-mobile': "url(src/assets/technology/background-technology-mobile.jpg)",
      },
      fontFamily: {
        Barlow: ["Barlow"],
        Condensed : ["Barlow Condensed"],
        Bellefair: ["Bellefair"],
      },
    },
  },
  plugins: [],
}
