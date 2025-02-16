const express = require("express");
const path = require("path");
const cors = require("cors");
const dbConnection = require("./db");
const adminAuth = require("./routes/Admin/adminLogin");
const adminAuthMiddleware = require("./middleware/adminJwtAuth");

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json()); // Parse JSON requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Routes
app.use("/admin", adminAuth); // Admin authentication routes

// Database connection
dbConnection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    // Serve the error page in case of a connection failure
    app.get("/", (req, res) => {
      return res
        .status(500)
        .sendFile(path.join(__dirname, "public", "error.html"));
    });
  } else {
    console.log("Database connected successfully");
    // Main route when the database connection is successful
    app.get("/", (req, res) => {
      return res.status(200).send("<h1>Database Connected Successfully!</h1>");
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "public", "error.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
