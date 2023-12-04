const express = require("express");
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.json());
// Use routes
app.use("/", require('./routes'));

// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log("Error in connecting to the database:", err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
