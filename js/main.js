/**
 * Israilof Hotel - Main JavaScript File
 */

document.addEventListener("DOMContentLoaded", () => {
  // ===== NAVBAR FUNCTIONALITY =====
  const navToggle = document.getElementById("navToggle")
  const navLinks = document.getElementById("navLinks")

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Handle scroll effects for navbar
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }
  })

  // ===== LANGUAGE SELECTION =====
  const langSelector = document.querySelector(".lang-selector")
  if (langSelector) {
    const currentLang = langSelector.querySelector(".current-lang")
    const langDropdown = langSelector.querySelector(".lang-dropdown")

    // Toggle language dropdown
    if (currentLang) {
      currentLang.addEventListener("click", (e) => {
        e.stopPropagation()
        if (langDropdown) {
          langDropdown.classList.toggle("active")
        }
      })
    }

    // Select language
    const langOptions = langDropdown ? langDropdown.querySelectorAll("li") : []
    langOptions.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.stopPropagation()
        const lang = this.getAttribute("data-lang")

        // Update current language display
        if (currentLang) {
          currentLang.textContent = lang.toUpperCase()
        }

        // Update active class
        langOptions.forEach((opt) => {
          opt.classList.remove("active")
        })
        this.classList.add("active")

        // Hide dropdown
        if (langDropdown) {
          langDropdown.classList.remove("active")
        }

        // Store language preference
        localStorage.setItem("preferredLanguage", lang)
      })
    })

    // Close language dropdown when clicking outside
    document.addEventListener("click", () => {
      if (langDropdown) {
        langDropdown.classList.remove("active")
      }
    })
  }

  // ===== BOOKING MODAL =====
  const bookingModal = document.getElementById("bookingModal")
  const bookNowBtn = document.getElementById("bookNowBtn")
  const closeModalBtns = document.querySelectorAll(".close-modal")

  // Open booking modal when clicking book now button
  if (bookNowBtn && bookingModal) {
    bookNowBtn.addEventListener("click", (e) => {
      e.preventDefault()
      bookingModal.style.display = "flex"
    })
  }

  // Close modal when clicking close button
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = this.closest(".modal")
      if (modal) {
        modal.style.display = "none"
      }
    })
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none"
    }
  })

  // Handle booking form submission
  const bookingForm = document.getElementById("bookingForm")
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Бронирование успешно отправлено!")
      if (bookingModal) {
        bookingModal.style.display = "none"
      }
    })
  }

  // ===== ROOM DETAILS MODAL =====
  const roomDetailsBtns = document.querySelectorAll(".room-details-btn")
  const roomModal = document.getElementById("roomModal")

  if (roomDetailsBtns.length > 0 && roomModal) {
    roomDetailsBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const roomCard = this.closest(".room-card")
        if (roomCard) {
          const roomModalContent = roomModal.querySelector("#roomModalContent")
          if (roomModalContent) {
            // Get room details
            const roomImage = roomCard.querySelector(".room-image img").src
            const roomName = roomCard.querySelector("h3").textContent
            const roomPrice = roomCard.querySelector(".room-price").textContent
            const roomCapacity = roomCard.querySelector(".room-capacity").textContent
            const roomDescription = roomCard.querySelector(".room-description").textContent

            // Populate modal content
            roomModalContent.innerHTML = `
                            <div class="room-modal-image">
                                <img src="${roomImage}" alt="${roomName}">
                            </div>
                            <div class="room-modal-details">
                                <h2>${roomName}</h2>
                                <p class="room-price">${roomPrice}</p>
                                <p class="room-capacity">${roomCapacity}</p>
                                <p class="room-description">${roomDescription}</p>
                                <div class="room-amenities">
                                    <h3>Удобства</h3>
                                    <ul>
                                        <li>Бесплатный WiFi</li>
                                        <li>Кондиционер</li>
                                        <li>Мини-бар</li>
                                        <li>Сейф</li>
                                        <li>Плоский телевизор</li>
                                    </ul>
                                </div>
                            </div>
                        `

            // Show modal
            roomModal.style.display = "flex"
          }
        }
      })
    })
  }
})
