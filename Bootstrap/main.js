const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinks.classList.add("active");
  });
});
let signInBtn = document.querySelector(".btn");
signInBtn.onclick = function () {
  document.querySelector(".prompt-msg").style.display = "block";
};
document.querySelector(".btn-close").onclick = function () {
  document.querySelector(".prompt-msg").style.display = "none";

}