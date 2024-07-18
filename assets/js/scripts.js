document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navUl = document.querySelector("nav ul");

    menuHamburguer.addEventListener("click", function() {
        navUl.classList.toggle("show");
    });
});
