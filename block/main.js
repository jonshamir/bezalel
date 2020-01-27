window.onscroll = function() {
  updateScroll();
};

function updateScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight;
  var scrolled = (winScroll / height) * 115;
  console.log(height);
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
