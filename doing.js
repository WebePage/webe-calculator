var ham = document.querySelector(".line");
var nav = document.querySelector("nav");
var link = document.querySelectorAll('nav li');

ham.addEventListener("click", () => {
    nav.classList.toggle("open");
})