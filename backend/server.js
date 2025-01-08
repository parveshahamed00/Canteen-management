const express = require('express')
const app = express()
const path = require("path")
const port = 3000
const dbConnection= require('./db')

dbConnection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        // Serve the error page in case of a connection failure
        app.get('/', (req, res) => {
            return res.status(500).sendFile(path.join(__dirname, 'public', 'error.html'));
        });
    } else {
        console.log("Database connected successfully");
        // Main route when the database connection is successful
        app.get('/', (req, res) => {
            return res.status(200).send('<h1>Database Connected Successfully!</h1>');
        });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})