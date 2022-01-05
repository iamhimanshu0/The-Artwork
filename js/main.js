const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuText = document.querySelectorAll(".menuText");
const menuAbout = document.getElementById("about");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuText.forEach(function (text, index) {
    setTimeout(() => {
      text.classList.toggle("open2");
    }, index * 50);
  });
  menuAbout.classList.toggle("open3");
});

// thanks to
// https://codepen.io/graham1384/pen/eYvOqMN?editors=1010
