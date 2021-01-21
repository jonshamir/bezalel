var root = document.getElementById("root");
var gallery = document.getElementById("gallery");
var lightbox = document.getElementById("lightbox");
var largeImage = document.getElementById("image-large");
var imageText = document.getElementById("image-text");

var galleryItems = [];

function buildGallery() {
  IMAGE_LIST.forEach((image, i) => {
    let el = document.createElement("div");
    el.classList.add("gallery-item");

    let txt = document.createElement("p");
    let span = document.createElement("span");
    span.innerHTML = image.title;
    txt.append(span);
    el.append(txt);

    let img = document.createElement("img");
    img.src = "images/" + image.filename;
    el.append(img);
    el.addEventListener("click", (e) => {
      lightbox.style.display = "block";
      lightbox.className = image.position + " " + image.size;
      largeImage.src = "images/" + image.filename;
      imageText.innerHTML = image.text;
      galleryItems.forEach((item, i) => {
        item.classList.add("fade");
      });

      e.target.parentElement.parentElement.classList.remove("fade");
      e.target.parentElement.parentElement.classList.add("active");
    });

    gallery.append(el);
    galleryItems.push(el);
  });
}

buildGallery();
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  galleryItems.forEach((item, i) => {
    item.classList.remove("fade");
    item.classList.remove("active");
  });
});
