let currentTextIndex = 0;

function showTextSlide(index) {
  const slider = document.querySelector(".text-slider");
  const totalSlides = document.querySelectorAll(".text-slide").length;

  // Adjust index to loop around
  if (index < 0) {
    currentTextIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentTextIndex = 0;
  } else {
    currentTextIndex = index;
  }

  // Update slider position
  slider.style.transform = `translateX(-${currentTextIndex * 100}%)`;
}

function nextSlide() {
  showTextSlide(currentTextIndex + 1);
}

function prevSlide() {
  showTextSlide(currentTextIndex - 1);
}

// Auto-slide functionality (optional)
setInterval(() => {
  nextSlide();
}, 3000); // Slide changes every 5 seconds
