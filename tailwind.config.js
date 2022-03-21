module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url(src/assets/home/background-home-desktop.jpg)",
        'crew-desktop': "url(src/assets/crew/background-crew-desktop.jpg)",
        'destination-desktop': "url(src/assets/destination/background-destination-desktop.jpg)",
        'technology-desktop': "url(src/assets/technology/background-technology-desktop.jpg)",
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
