document.addEventListener("DOMContentLoaded", () => {
  // File upload handling
  const fileInput = document.getElementById("resume")
  const fileLabel = document.querySelector(".file-upload-label span")
  const fileName = document.querySelector(".file-name")

  if (fileInput) {
    fileInput.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        fileName.textContent = this.files[0].name
        fileLabel.textContent = "File selected"
      } else {
        fileName.textContent = ""
        fileLabel.textContent = "Choose a file"
      }
    })
  }

  // Form submission
  const profileForm = document.getElementById("profile-form")
  const loadingOverlay = document.getElementById("loading-overlay")

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Show loading overlay
      loadingOverlay.classList.remove("hidden")

      // Get form data
      const formData = {
        resume: fileInput.files[0] ? fileInput.files[0].name : null,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        portfolio: document.getElementById("portfolio").value,
        leetcode: document.getElementById("leetcode").value,
        codeforces: document.getElementById("codeforces").value,
      }

      // Store form data in localStorage for the dashboard
      localStorage.setItem("profileData", JSON.stringify(formData))

      // Simulate API call delay
      setTimeout(() => {
        // Redirect to dashboard
        window.location.href = "dashboard.html"
      }, 3000)
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

