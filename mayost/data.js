const IMAGE_LIST = [
  {
    filename: "1.jpg",
    title: "Taipei, Taiwan  /  Lat 25.047760  /  Long 121.531850",
    text: "Shall we begin with the beginning?",
    size: "medium",
    position: "right",
  },
  {
    filename: "2.jpg",
    title: "Boulogne Billancourt, France Lat 48.833330  /  Long 2.250000",
    text: "What will change everything?",
    size: "medium",
    position: "left",
  },
  {
    filename: "3.jpg",
    title: "Boulogne Billancourt, France Lat 48.833330  /  Long 2.250000",
    text: "What will change everything?",
    size: "medium",
    position: "left",
  },
  {
    filename: "4.jpg",
    title: "Velizy-Villacoublay, France / Lat 48.781980 / Long 2.193950",
    text: "What music do you listen to the most?",
    size: "medium",
    position: "left",
  },
  {
    filename: "5.jpg",
    title: "Sao Paulo, Brazil / Lat -23.547500 / Long -46.636110",
    text: "The role of chairs",
    size: "large",
    position: "center",
  },
  {
    filename: "6.jpg",
    title: "Matsuyama, Japan / Lat 33.833000 / Long 132.767000",
    text: "What else would you like to say?",
    size: "small",
    position: "right",
  },
  {
    filename: "7.jpg",
    title: "Amsterdam, Netherlands / Lat 52.374030 / Long 4.889690",
    text: "What is your favourite mistake?",
    size: "small",
    position: "right",
  },
  {
    filename: "8.jpg",
    title: "Houston, Texas / Lat 29.763280 / Long -95363270",
    text: "Do politics and art mingle?",
    size: "medium",
    position: "left",
  },
  {
    filename: "9.jpg",
    title: "Saint-Etienne, France / Lat 45.433330 / Long 4.400000",
    text: "Do you write poems?",
    size: "medium",
    position: "right",
  },
  {
    filename: "10.jpg",
    title: "Budaros, Hungary / Lat 47.461810 / Long 18.958450",
    text: "What is your favourite bird?",
    size: "medium",
    position: "right",
  },
  {
    filename: "11.jpg",
    title: "Herzliyya, Israel / Lat 32.165830 / Long 121.1444400",
    text: "What first, music or words?",
    size: "small",
    position: "left",
  },
  {
    filename: "12.jpg",
    title: "Riez, France / Lat 43.817930 / Long 6.092950",
    text: "How would you like to die?",
    size: "medium",
    position: "left",
  },
  {
    filename: "13.jpg",
    title: "Daytona Beach, Florida / Lat 29.199661 / Long -81.043724",
    text: "What are you fighting for?",
    size: "medium",
    position: "center",
  },
  {
    filename: "14.jpg",
    title: "Kula, Hawaii / Lat 20.792220 / Long -156.326940",
    text: "What don't you like at all?",
    size: "medium",
    position: "right",
  },
  {
    filename: "15.jpg",
    title: "Singapore / Lat 1.289670 / Long 103.850070",
    text: "Do you believe in ghosts?",
    size: "large",
    position: "center",
  },
  {
    filename: "16.jpg",
    title: "Marshfield, Wisconsin / Lat 44.668850 / Long -90171800",
    text: "What is energy?",
    size: "medium",
    position: "left",
  },
  {
    filename: "17.jpg",
    title: "Bobigny, France / Lat 48.900000 / Long 2.450000",
    text: "What is science?",
    size: "large",
    position: "center",
  },
  {
    filename: "18.jpg",
    title: "Tachikawa, Japan / Lat 35.683000 / Long 139.417000",
    text: "Is there life after life?",
    size: "medium",
    position: "left",
  },
  {
    filename: "19.jpg",
    title: "Wiesenhofen, Germany / Lat 49.043160 / Long 11.412990",
    text: "What is your favourite color?",
    size: "medium",
    position: "right",
  },
  {
    filename: "20.jpg",
    title: "Columbia, Missouri / Lat 38.945570 / Long -92.323860",
    text: "Can objects make us happier?",
    size: "medium",
    position: "right",
  },
  {
    filename: "21.jpg",
    title: "Columbia, Missouri / Lat 38.945570 / Long -92.323860",
    text: "Can objects make us happier?",
    size: "medium",
    position: "right",
  },
  {
    filename: "22.jpg",
    title: "Amsterdam, Netherlands / Lat 52.374030 / Long 4.889690",
    text: "What could't you live without?",
    size: "small",
    position: "left",
  },
  {
    filename: "23.jpg",
    title: "Petah-Tikwa, Israel / Lat 32.177320 / Long 121.2634111",
    text: "What is your most appreciated feature in a women?",
    size: "medium",
    position: "left",
  },
  {
    filename: "24.jpg",
    title: "Norfolk. Virginia / Lat 36.846810 / Long -76.285220",
    text: "Art at home",
    size: "medium",
    position: "left",
  },
  {
    filename: "25.jpg",
    title: "Tokyo, Japan / Lat 35.689506 / Long 139.691700",
    text: "What is harmony?",
    size: "medium",
    position: "left",
  },
  {
    filename: "26.jpg",
    title: "Ecclesfield, United Kingdom / Lat 53.439750 / Long -1.465200",
    text: "Will happiness find me?",
    size: "large",
    position: "center",
  },
  {
    filename: "27.jpg",
    title: "Ecclesfield, United Kingdom / Lat 53.439750 / Long -1.465200",
    text: "Will happiness find me?",
    size: "large",
    position: "center",
  },
  {
    filename: "28.jpg",
    title: "Ecclesfield, United Kingdom / Lat 53.439750 / Long -1.465200",
    text: "Will happiness find me?",
    size: "large",
    position: "center",
  },
  {
    filename: "29.jpg",
    title: "Paris, Frnace / Lat 48.853410 / Long 2.348800",
    text: "How do you relax?",
    size: "medium",
    position: "center",
  },
  {
    filename: "30.jpg",
    title: "Arnold, England / Lat 53.000000 / Long -1.133330",
    text: "Do you have dreams?",
    size: "medium",
    position: "right",
  },
  {
    filename: "31.jpg",
    title: "Moscow, Russian Federation / Lat 55.752220 / Long 37.615560",
    text: "Where is the edge?",
    size: "large",
    position: "right",
  },
  {
    filename: "32.jpg",
    title: "Orlando, Florida / Lat 28.538340 / Long -81.379240",
    text: "What is your first memory?",
    size: "small",
    position: "left",
  },
];