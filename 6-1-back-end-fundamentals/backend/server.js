// TODO 1: Import Express
const express = require("express");

// TODO 3: Allow React to access the server
const cors = require("cors");

// TODO 2: Create the Express app
const app = express();

app.use(cors());

// TODO 5: Create the home route "/"
app.get("/", (req, res) => {
    res.send("Hello from the back-end server");
});

// TODO 6: Create the "/about" route
app.get("/about", (req, res) => {
    res.send("This is the about route");
});

// TODO 7: Create the "/student" route
app.get("/student", (req, res) => {
    res.json({
        name: "Sadeem",
        major: "Software Engineering",
    });
});

// TODO 4: Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});