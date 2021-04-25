const express = require("express");
const cors = require("cors");
const config = require("./app/config/config.js");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models/user.model.js");


// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome to hackaton." });
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});