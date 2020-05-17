window.addEventListener("load", function() {
  navIcons = document.querySelectorAll(".nav-icon");

  navIcons.forEach((navIcon, i) => {
    const targetId = navIcon.dataset.target;
    navIcon.addEventListener("click", event => showScreen(navIcon, targetId));
  });
});

function showScreen(navIcon, screenId) {
  console.log(navIcon);
  document.querySelectorAll(".content").forEach((screen, i) => {
    screen.style.display = "none";
  });
  document.getElementById(screenId).style.display = "block";

  document.querySelectorAll(".nav-icon").forEach((icon, i) => {
    icon.classList.remove("active");
  });
  navIcon.classList.add("active");
}
