const menuScrollThreshold = 150;

window.addEventListener("load", function () {
  console.log("hey");
  onScroll();
});

window.onscroll = onScroll;

function onScroll() {
  if (document.body.scrollTop > menuScrollThreshold)
    document.getElementById("floating-menu").classList.remove("hidden");
  else document.getElementById("floating-menu").classList.add("hidden");
}
