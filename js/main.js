function preloader() {
    let preloader = document.querySelector(".preloader");
    let video = document.querySelector(".stage__video");

    window.onload = function () {
        preloader.classList.add("preloader_loaded");
        video.style.animation = "stageFade 1.5s ease";
    };
}
preloader();

function menu() {
    let burgerMenu = document.querySelector(".burger-menu");
    let menuInfo = document.querySelector(".info");
    let video = document.querySelector(".stage__video");

    burgerMenu.addEventListener("click", () => {
        menuInfo.classList.toggle("info_active");
        burgerMenu.classList.toggle("toggle");
        if (menuInfo.classList.contains("info_active")) {
            video.style.display = 'none';
        } else {
            video.style.display = '';
        }
    });
}
menu();