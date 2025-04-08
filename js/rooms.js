document.addEventListener("DOMContentLoaded", () => {
  // Room filtering functionality
  const roomTypeFilter = document.getElementById("roomTypeFilter")
  const priceFilter = document.getElementById("priceFilter")
  const capacityFilter = document.getElementById("capacityFilter")
  const filterReset = document.getElementById("filterReset")
  const roomCards = document.querySelectorAll(".room-card")

  // Apply filters
  function applyFilters() {
    const roomType = roomTypeFilter.value
    const price = priceFilter.value
    const capacity = capacityFilter.value

    roomCards.forEach((card) => {
      let showCard = true

      // Filter by room type
      if (roomType !== "all" && card.getAttribute("data-type") !== roomType) {
        showCard = false
      }

      // Filter by price
      const roomPrice = Number.parseInt(card.getAttribute("data-price"))
      if (price === "low" && roomPrice > 10000) {
        showCard = false
      } else if (price === "medium" && (roomPrice <= 10000 || roomPrice > 20000)) {
        showCard = false
      } else if (price === "high" && roomPrice <= 20000) {
        showCard = false
      }

      // Filter by capacity
      const roomCapacity = Number.parseInt(card.getAttribute("data-capacity"))
      if (capacity === "1-2" && (roomCapacity < 1 || roomCapacity > 2)) {
        showCard = false
      } else if (capacity === "3-4" && (roomCapacity < 3 || roomCapacity > 4)) {
        showCard = false
      } else if (capacity === "5+" && roomCapacity < 5) {
        showCard = false
      }

      // Show or hide card
      card.style.display = showCard ? "block" : "none"
    })
  }

  // Event listeners for filters
  roomTypeFilter.addEventListener("change", applyFilters)
  priceFilter.addEventListener("change", applyFilters)
  capacityFilter.addEventListener("change", applyFilters)

  // Reset filters
  filterReset.addEventListener("click", () => {
    roomTypeFilter.value = "all"
    priceFilter.value = "all"
    capacityFilter.value = "all"
    applyFilters()
  })

  // Room details modal
  const roomDetailsBtns = document.querySelectorAll(".room-details-btn")
  const roomModal = document.getElementById("roomModal")
  const roomModalContent = document.getElementById("roomModalContent")
  const bookNowBtn = document.getElementById("bookNowBtn")
  const bookingModal = document.getElementById("bookingModal")

  roomDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const roomCard = this.closest(".room-card")
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
              <li>Бесплатный Wi-Fi</li>
              <li>Кондиционер</li>
              <li>Мини-бар</li>
              <li>Сейф</li>
              <li>Плоский телевизор</li>
            </ul>
          </div>
        </div>
      `

      roomModal.style.display = "flex"
    })
  })

  // Book Now button in room modal
  bookNowBtn.addEventListener("click", () => {
    roomModal.style.display = "none"
    bookingModal.style.display = "flex"
  })
})
