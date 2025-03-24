const db = require("../../db");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { idOrRollNo, role } = req.body;
  console.log(idOrRollNo);

  const sql = `SELECT * FROM users WHERE identifier = ? AND role = ?`;
  db.query(sql, [idOrRollNo, role], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    if (result.length > 0) {
      const token = jwt.sign({ idOrRollNo: idOrRollNo, role: "user" }, "sac", {
        expiresIn: "1h",
      });
      return res.json({ success: true, token, role: "user",name:result[0].name,id:result[0].identifier });
    } else {
      // User not found
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  });
};

module.exports = { login };
