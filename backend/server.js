const express = require("express");
const path = require("path");
const cors = require("cors");
const dbConnection = require("./db");
const adminAuth = require("./routes/Admin/adminLogin");
const addCaterer = require("./routes/Admin/addCaterer");
const catererList = require("./routes/Admin/catererList");
const deleteCaterer = require("./routes/Admin/deleteCaterer");
const addFoodItems = require("./routes/Admin/addFoodItems");
const signUp = require("./routes/User/signUp");
const login=require("./routes/User/login")
const homePage=require("./routes/User/homepage")
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json()); // Parse JSON requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
// serves the images frontend
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes

app.use("/admin", adminAuth); // Admin authentication routes
app.use("/admin/dashboard/addCaterer", addCaterer); // Admin Adding caterer
app.use("/admin/dashboard/catererList", catererList); // Admin seeing caterer list
app.use("/admin/dashboard/catererList", deleteCaterer);
app.use("/admin/dashboard/foodItems", addFoodItems);
app.use("/signup", signUp); // creating Users
app.use("/login", login); // user Login
app.use("/homepage",homePage)
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
