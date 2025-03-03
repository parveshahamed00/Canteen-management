const db = require("../../db");
const signUp = (req, res) => {
  const { name, department, identifier, role } = req.body;
  if (!name || !department || !identifier || !role) {
    return res.status(400).send("All fields are required");
  }
  const sql =
    "INSERT INTO users (name, department, identifier, role) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, department, identifier, role], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      return res.status(500).send("Error registering user");
    }
    res.send({ success: true, message: "Registration successful" });
  });
};
module.exports = { signUp };
