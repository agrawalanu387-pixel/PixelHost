
const express = require("express");
const path = require("path");

// Create the PixelHost web server
const app = express();

// Use the hosting platform's port if provided
const PORT = process.env.PORT || 3000;

// Allow the browser to read JSON requests
app.use(express.json());

// Serve dashboard files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Simple health check for testing the backend
app.get("/api/status", (req, res) => {
  res.json({
    name: "PixelHost",
    status: "online",
    mode: "demo"
  });
});

// Listen on all network interfaces so Codespaces can forward the port
app.listen(PORT, "0.0.0.0", () => {
  console.log(`PixelHost is running on port ${PORT}`);
});
