const db = require("../../db");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Define the uploads directory relative to the backend folder
const uploadDir = path.join(__dirname, "../../uploads"); 

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Add Food Item Function
const addFoodItem = (req, res) => {
  const { name, quantity, price, date } = req.body;
  const fileName = req.file ? req.file.filename : null; // Store only filename

  const sql =
    "INSERT INTO food_items (name, quantity, price, date, image_path) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, quantity, price, date, fileName], (err, result) => {
    if (err) {
      console.error("Error adding food item:", err);
      return res.status(500).send("Error adding food item.");
    }
    res.send("Food item added successfully.");
  });
};

module.exports = {
  addFoodItem,
  upload,
};
