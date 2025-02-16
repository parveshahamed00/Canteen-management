const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, "samosa", (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }

        req.admin = decoded.AdminId; // Attach admin data to the request
        next();
    });
};

module.exports = authMiddleware;