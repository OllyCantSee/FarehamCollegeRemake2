document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider img');
    const navButtons = document.querySelectorAll('.slider-nav a');
    let currentSlide = 0;

    function changeSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navButtons.forEach(button => button.classList.remove('active'));

        slides[index].classList.add('active');
        navButtons[index].classList.add('active');
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;

        changeSlide(currentSlide);
    }

    setInterval(autoSlide, 10000);

    navButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            currentSlide = index;
            changeSlide(currentSlide);
        });
    });
});

function show() {
    document.getElementById('side-nav-bar').classList.toggle('active');
}