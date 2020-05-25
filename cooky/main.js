var titles = {
  feed: '<img src="images/logo.svg" class="logo" />',
  challenges: "Challenges",
  profile: "Profile",
  post: "Create",
  suggest: "<div class='back' onclick='goto(\"challenges\")'>‹</div>Suggest",
  suggestions:
    "<div class='back' onclick='goto(\"profile\")'>‹</div>Suggestions",
  chat:
    "<div class='back' onclick='goto(\"suggestions\")'>‹</div>Anat's Suggestion"
};

window.addEventListener("load", function() {
  navIcons = document.querySelectorAll(".nav-icon");

  navIcons.forEach((navIcon, i) => {
    const targetId = navIcon.dataset.target;
    navIcon.addEventListener("click", event => showScreen(navIcon, targetId));
  });
});

function goto(screenId) {
  showScreen(false, screenId);
}

function showScreen(navIcon, screenId) {
  document.querySelectorAll(".content").forEach((screen, i) => {
    screen.style.display = "none";
  });
  document.getElementById(screenId).style.display = "block";

  if (navIcon) {
    document.querySelectorAll(".nav-icon").forEach((icon, i) => {
      icon.classList.remove("active");
    });
    navIcon.classList.add("active");
  }

  // Change title
  document.getElementById("title").innerHTML = titles[screenId];
}

goto("feed");
