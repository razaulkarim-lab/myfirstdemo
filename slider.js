const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// Show the current slide
function showSlide(i) {
    // Remove the "active" class from all slides
    slides.forEach(slide => slide.classList.remove("active"));
    
    // Add the "active" class to the current slide
    slides[i].classList.add("active");
}

// Move to the next slide
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Move to the previous slide
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Event Listeners for Controls
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
