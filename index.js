const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

let quotes = [];

fs.readFile("quotes.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading quotes file:", err);
    return;
  }
  quotes = JSON.parse(data);
  console.log("Total num of quotes:", quotes.length);
});

app.get("/quote", (req, res) => {
  if (quotes.length === 0) {
    res.status(500).send("Quotes not available");
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

app.listen(port, () => {
  console.log(`Athlete Quotes API listening at http://localhost:${port}`);
});
