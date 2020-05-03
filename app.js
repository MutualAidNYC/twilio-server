console.log("warming up");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // load the local .env file
}

const app = require("./server");

// const users = require("./routes/api/users");
// const tweets = require("./routes/api/tweets");
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// app.use("/api/users", users);
// app.use("/api/tweets", tweets);

const onListen = () => console.log(`Server is running on port ${port}`);

const port = process.env.PORT || 80;
app.listen(port, onListen);
