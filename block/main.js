const scrollUp = "scroll-up";
const scrollDown = "scroll-down";

let isFigureExpanded = false;
let figures, backdrop;
let lastScroll = 0;

window.onscroll = function() {
  updateScroll();
};

document.getElementById("root").onscroll = () => updateScroll();

function updateScroll() {
  // Top bar scroll indicator
  var scrollEl = document.getElementById("root"); // document.documentElement
  var winScroll = scrollEl.scrollTop;
  var height = scrollEl.scrollHeight;
  // console.log(scrollEl);
  var scrolled = (winScroll / height) * 115;
  if (scrolled > 100) scrolled = 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Image expansion exit
  if (isFigureExpanded) exitAllFigures();

  updateStickyHeader();
}

function updateStickyHeader() {
  var scrollEl = document.getElementById("root"); // document.documentElement

  const currentScroll = scrollEl.scrollTop;
  if (currentScroll == 0) {
    scrollEl.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !scrollEl.classList.contains(scrollDown)) {
    // down
    scrollEl.classList.remove(scrollUp);
    scrollEl.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    scrollEl.classList.contains(scrollDown)
  ) {
    // up
    scrollEl.classList.remove(scrollDown);
    scrollEl.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
}

document.getElementById("root").addEventListener("click", () => {
  if (isFigureExpanded) exitAllFigures();
});

window.addEventListener("load", function() {
  figures = document.querySelectorAll("figure.expandable");
  backdrop = document.querySelectorAll("#backdrop")[0];

  figures.forEach((figure, i) => {
    figure.addEventListener("click", event => expandFigure(event, figure));
  });
});

function expandFigure(event, figure) {
  if (!isFigureExpanded) {
    event.stopPropagation();
    isFigureExpanded = true;

    figure.classList.add("expanded");
    backdrop.classList.add("visible");

    var img = figure.getElementsByTagName("img")[0];
    var imgOffset = img.getBoundingClientRect();

    var centerX = imgOffset.left + img.width / 2;
    var centerY = imgOffset.top + img.height / 2;

    var transX = window.innerWidth / 2 - centerX;
    var transY = window.innerHeight / 2 - centerY;
    img.style.transform = `translate(${transX}px,${transY}px) scale(1.8)`;
    img.style.zIndex = "100";
    figure.style.zIndex = "100";
  }
}

function exitAllFigures() {
  backdrop.classList.remove("visible");
  isFigureExpanded = false;

  figures.forEach((figure, i) => {
    var img = figure.getElementsByTagName("img")[0];

    figure.classList.remove("expanded");
    img.style.transform = "";
    setTimeout(() => {
      if (!isFigureExpanded) {
        img.style.zIndex = "1";
        figure.style.zIndex = "10";
      }
    }, 400);
  });
}
