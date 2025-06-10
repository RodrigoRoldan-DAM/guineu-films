// función menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

// offset navbar
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}