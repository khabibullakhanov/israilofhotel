document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality
  const slider = document.getElementById("roomSlider")
  const prevBtn = document.getElementById("prevSlide")
  const nextBtn = document.getElementById("nextSlide")

  if (slider && prevBtn && nextBtn) {
    let currentSlide = 0
    const slides = slider.querySelectorAll(".slide")
    const totalSlides = slides.length

    // Set initial position
    updateSliderPosition()

    // Previous slide
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      updateSliderPosition()
    })

    // Next slide
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSliderPosition()
    })

    // Auto slide
    let slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSliderPosition()
    }, 5000)

    // Pause auto slide when hovering over slider
    slider.addEventListener("mouseenter", () => {
      clearInterval(slideInterval)
    })

    // Resume auto slide when mouse leaves slider
    slider.addEventListener("mouseleave", () => {
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides
        updateSliderPosition()
      }, 5000)
    })

    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }
})
