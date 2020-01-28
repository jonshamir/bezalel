window.onscroll = function() {
  updateScroll();
};

document.getElementById("content").onscroll = function() {
  updateScroll();
};

function updateScroll() {
  var scrollEl = document.getElementById("content"); // document.documentElement
  var winScroll = scrollEl.scrollTop;
  var height = scrollEl.scrollHeight;
  // console.log(scrollEl);
  var scrolled = (winScroll / height) * 115;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
