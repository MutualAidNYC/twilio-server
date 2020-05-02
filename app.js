const express = require("express");
const app = express();
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // load the local .env file
}

// const users = require("./routes/api/users");
// const tweets = require("./routes/api/tweets");
console.log("warming up");
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/users", users);
// app.use("/api/tweets", tweets);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
