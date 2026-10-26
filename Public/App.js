
/* =========================================
   PIXELHOST - FRONTEND JAVASCRIPT
   This file checks whether the backend works.
   ========================================= */

// Find the status label in the dashboard
const statusLabel = document.querySelector(".status");

// Check the PixelHost backend
async function checkBackend() {
  try {
    // Request the backend status from server.js
    const response = await fetch("/api/status");

    // Stop if the server returned an error
    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    // Convert the response into JavaScript data
    const data = await response.json();

    // Show whether PixelHost is responding
    if (statusLabel && data.status === "online") {
      statusLabel.textContent = "● BACKEND ONLINE";
    }
  } catch (error) {
    // Show that the backend could not be reached
    if (statusLabel) {
      statusLabel.textContent = "● BACKEND OFFLINE";
    }

    console.error("PixelHost status check failed:", error);
  }
}

// Run the check when the page loads
checkBackend();
