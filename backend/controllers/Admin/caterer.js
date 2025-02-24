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
    return res.status(200).json({
      success: true,
      message: "Caterer added successfully",
      data: result,
    });
  });
};
const CatererList = (req, res) => {
  const sql = "SELECT * FROM caterers";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({
          success: false,
          message: "Error fetching caterers",
          error: err,
        });
    }
    if (results.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No caterers found" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Caterers retrieved successfully",
        data: results,
      });
  });
};
const deleteCaterer=(req,res)=>{
  const catererId = req.params.catererId;
  const sql = 'DELETE FROM caterers WHERE caterer_id = ?';
console.log(catererId);
  db.query(sql, [catererId], (err, result) => {

    if (err) {
      console.error('Error deleting caterer:', err);
      return res.status(500).send('Error deleting caterer.');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Caterer not found.');
    }
    res.send('Caterer deleted successfully.');
  });
  
}
module.exports = { addCaterer,CatererList,deleteCaterer };
