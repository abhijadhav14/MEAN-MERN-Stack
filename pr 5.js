// using the given code change http to express module to create a server and handle routes for homepage, about, and contact page in which json object must show.

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  const date = new Date();
  res.send(`<h1>About Page:</h1><p>Current Date and Time: ${date}</p>`);
});

app.get("/contact", (req, res) => {
  res.json({
    page: "Vaibhav",
    email: "vaibhavvadde15@gmail.com",
    phone: "1234567890",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});