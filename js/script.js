var link = document.querySelector('.button-feedback');
var popup = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-close');
var overlay = document.querySelector('.modal-overlay');

// Отображение модального окна входа
link.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.remove('visually-hidden');

});

// Сокрытие модального окна входа
close.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.add('visually-hidden');
    console.log('О май гад');
});

window.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            overlay.classList.add('visually-hidden');
        }
    }
});

// Slides
var slides = document.querySelectorAll('.slider__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);
var next = document.querySelector('.slider__control_prev');
var previous = document.querySelector('.slider__control_next');

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

function nextSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
}
function previousSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
}
function goToSlide(n) {
    slideInterval = setInterval(nextSlide, 4000);
    slides[currentSlide].classList.remove('slider__slide_show');
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('slider__slide_show');
}
