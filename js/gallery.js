document.addEventListener("DOMContentLoaded", () => {
  // Gallery filtering
  const galleryFilterButtons = document.querySelectorAll(".gallery-filter button")
  const galleryItems = document.querySelectorAll(".gallery-item")

  // Set active filter
  galleryFilterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      galleryFilterButtons.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Get filter value
      const filter = this.getAttribute("data-filter")

      // Filter gallery items
      galleryItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxCaption = document.getElementById("lightbox-caption-text")
  const closeLightboxBtn = document.querySelector(".close-lightbox")
  const prevLightboxBtn = document.querySelector(".lightbox-btn.prev")
  const nextLightboxBtn = document.querySelector(".lightbox-btn.next")

  let currentLightboxIndex = 0
  let visibleGalleryItems = []

  // Open lightbox
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Get visible items
      visibleGalleryItems = Array.from(galleryItems).filter((item) => item.style.display !== "none")

      // Get current index
      currentLightboxIndex = visibleGalleryItems.indexOf(this)

      // Set lightbox image and caption
      const img = this.querySelector("img")
      const caption = this.querySelector("h3").textContent

      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightboxCaption.textContent = caption

      // Show lightbox
      lightbox.style.display = "flex"
    })
  })

  // Close lightbox
  closeLightboxBtn.addEventListener("click", () => {
    lightbox.style.display = "none"
  })

  // Previous image
  prevLightboxBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length
    updateLightbox()
  })

  // Next image
  nextLightboxBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length
    updateLightbox()
  })

  // Update lightbox
  function updateLightbox() {
    const item = visibleGalleryItems[currentLightboxIndex]
    const img = item.querySelector("img")
    const caption = item.querySelector("h3").textContent

    lightboxImg.src = img.src
    lightboxImg.alt = img.alt
    lightboxCaption.textContent = caption
  }

  // Close lightbox when clicking outside
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none"
    }
  })
})
