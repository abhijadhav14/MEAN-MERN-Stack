const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Mary" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
