// ===========Toggle Icon navbar=============

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ===========================scroll Selection active link==================================

let Selection = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Selection.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        letid = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            });
        };
    });

    // ================sticky navbar============

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
   
   //  ================remove toggle icon and navbar=============
   menuIcon.classList.remove('fa-xmark');
   navbar.classList.remove('active');
 };

// =============================scroll rev=====================
scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
scrollReveal().reveal('.home-content, heading',{origin: 'top' });
scrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contect form',{origin: 'buttom' });
scrollReveal().reveal('.home-content h1,.about-img',{origin: 'left' });
scrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});
// =============================type js=====================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});