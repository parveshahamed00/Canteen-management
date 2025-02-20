const db = require("../../db");

const addCaterer = (req, res) => {
  const { catererName, catererId } = req.body;

  if (!catererName || !catererId) {
    return res
      .status(400)
      .json({ success: false, message: "Caterer name and ID are required" });
  }

  console.log("Received Caterer:", { catererName, catererId });

  const sql = "INSERT INTO caterers (caterer_id, name) VALUES (?, ?)";
  db.query(sql, [catererId, catererName], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Error adding caterer", error: err });
    }

    console.log("Caterer added successfully:", result);
    return res
      .status(200)
      .json({
        success: true,
        message: "Caterer added successfully",
        data: result,
      });
  });
};
// TODO: add delete caterer here it self
module.exports = { addCaterer };
