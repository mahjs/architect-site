document.querySelector(".hamburger-menu")?.addEventListener("click", () => {
  document.querySelector(".container")?.classList.toggle("change");
  document.querySelector(".close-sidebar").style.zIndex = 300;
});

document.querySelector(".close-sidebar")?.addEventListener("click", () => {
  document.querySelector(".container")?.classList.remove("change");
  document.querySelector(".close-sidebar").style.zIndex = -1;
});

window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("display");
  }, 4000);
};
