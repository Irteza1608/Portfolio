var typed = new Typed("#typing", {
    strings: [
        "Computer Engineer",
        "Salesforce Admin",
        "Web Developer",
        "Java Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
window.addEventListener("scroll", function () {

    let scrollTop = window.scrollY;

    let docHeight = document.documentElement.scrollHeight - window.innerHeight;

    let scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById("progress-bar").style.width = scrollPercent + "%";

});
/* Scroll Reveal */

ScrollReveal({

    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 200

});

ScrollReveal().reveal('.home-content', { origin: 'left' });

ScrollReveal().reveal('.home-img', { origin: 'right' });

ScrollReveal().reveal('.about-img', { origin: 'left' });

ScrollReveal().reveal('.about-content', { origin: 'right' });

ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 150 });

ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.timeline-item', { origin: 'left', interval: 200 });
/* ===========================
   MOBILE MENU
=========================== */

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});
/* Back To Top */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});