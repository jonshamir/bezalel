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
  window.scrollTo(0, 0);
}

var isChatOpen = false;
function toggleChat() {
  var chat = document.getElementById("floating-chat");
  if (isChatOpen) chat.classList.add("closed");
  else chat.classList.remove("closed");

  isChatOpen = !isChatOpen;
}

var areSuggestionsOpen = false;
function toggleSuggestions() {
  var suggestions = document.getElementById("suggestions-inline");
  if (areSuggestionsOpen) suggestions.classList.add("closed");
  else suggestions.classList.remove("closed");

  areSuggestionsOpen = !areSuggestionsOpen;
}

goto("feed");
