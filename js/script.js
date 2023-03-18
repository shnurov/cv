/* toggle icons in menu */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/* scroll sections active */
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* reval */
ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

ScrollReveal().reveal('.home-content h3, .heading, .about-content h3', { origin: 'top'});
ScrollReveal().reveal('.social-media, .home-content a, .services-container, .portfolio-box, .contact form, .about-content a', { origin: 'bottom'});
ScrollReveal().reveal('.home-img, .about-content ul', { origin: 'right'});
ScrollReveal().reveal('.home-content h1, .home-content h2, .home-content p, .about-img', { origin: 'left'});

/* typed */
const typed = new Typed('.multiple-text', {
    strings: ['Netrunner in Night City', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



