ScrollReveal({ reset: true });
ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.nav-link');
ScrollReveal().reveal('.header-second');
ScrollReveal().reveal('.cryptoicon');
ScrollReveal().reveal('.tabletr');
ScrollReveal().reveal('.btn-buy');
ScrollReveal().reveal('.form-control');
ScrollReveal().reveal('.btn-search');

var button = document.querySelector('.btn-search');

button.addEventListener('click', function () {
    ScrollReveal().reveal('.crypto-search');
    ScrollReveal({ reset: true });
})

