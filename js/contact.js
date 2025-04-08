document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  const formSuccess = document.getElementById("formSuccess")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, you would send the form data to a server here

      // Show success message
      if (formSuccess) {
        formSuccess.style.display = "block"
      }

      // Reset form
      this.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (formSuccess) {
          formSuccess.style.display = "none"
        }
      }, 5000)
    })
  }
})
