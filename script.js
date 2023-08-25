const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

/* ... (previous JS) ... */

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    // Update progress circle
    const rotation = (currentIndex / slides.length) * 360;
    document.querySelector('.progress').style.transform = `rotate(${rotation}deg)`;
}
