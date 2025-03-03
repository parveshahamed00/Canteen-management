const db= require("../../db")
const jwt = require('jsonwebtoken');
const login = (req, res) => {
    const { AdminId, AdminPassword } = req.body;
console.log( AdminId, AdminPassword);

    const sql = `SELECT * FROM admin_login_credentials WHERE AdminId = ? AND AdminPassword = ?`;
    db.query(sql, [AdminId, AdminPassword], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            const token = jwt.sign({ AdminId: 'sac2025', role: 'admin' }, "samosa", { expiresIn: '1h' });
            res.json({ success: true, token,role: 'admin' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
};

module.exports = { login };