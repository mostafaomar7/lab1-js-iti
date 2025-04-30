let images = document.querySelectorAll(".img");
let currentIndex = 0;
let intervalId ;

function showSlide(index) {
    images.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

document.getElementById("rightBtn").onclick = nextSlide;
document.getElementById("leftBtn").onclick = prevSlide;

document.getElementById("slideShowBtn").onclick = () => {
    if (!intervalId) {
        intervalId = setInterval(nextSlide, 1500);
    }
};

document.getElementById("stopBtn").onclick = () => {
    clearInterval(intervalId);
    intervalId = null;
};

// Initial display
showSlide(currentIndex);
