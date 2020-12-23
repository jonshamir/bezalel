var root = document.getElementById("root");
var volumeBar = document.getElementById("volumeBar");
var volume = 0;
var VOLUME_MAX = 15;

var whiteNoise = new Audio("noise.mp3");

function updateVolume() {
  whiteNoise.volume = volume / VOLUME_MAX;
  window.title = volume;
  volumeBar.innerHTML = "";

  for (var i = 0; i < VOLUME_MAX; i++) {
    var imageEl = document.createElement("img");
    if (i < volume) imageEl.setAttribute("src", "h.png");
    else imageEl.setAttribute("src", "0.png");

    volumeBar.appendChild(imageEl);
  }
}

updateVolume();

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName == "ArrowUp") {
    whiteNoise.play();
    if (volume < VOLUME_MAX) {
      volume++;
      updateVolume();
    }
  } else if (keyName == "ArrowDown") {
    if (volume > 0) {
      volume--;
      updateVolume();
    }
  }
});
