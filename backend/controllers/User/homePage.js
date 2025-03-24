const db = require("../../db");
const homePage=(req,res)=>{
    const sql= "SELECT * from food_items";
    db.query(sql,(err,result)=>{
        if (err) {
            console.error("Database error:", err);
            return res
              .status(500)
              .json({
                success: false,
                message: "Error fetching foodItems",
                error: err,
              });
          }
          if (result.length === 0) {
            return res
              .status(404)
              .json({ success: false, message: "No Food Items" });
          }
          return res
            .status(200)
            .json({
              success: true,
              message: "Success",
              data: result,
            });
    })
}
module.exports={homePage}