const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Correct "Access-Control-Allow-Orgin" to "Access-Control-Allow-Origin"
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept" // Correct the typo in this line too
    );
    next();
});


app.use(express.json()); // Middleware for parsing JSON data.

app.get('/', (req, res) => {
    res.send('Hello World test');
});

app.use('/api', require('./Routes/CreateUser'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
