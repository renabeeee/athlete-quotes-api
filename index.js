const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname)));

let quotes = [];
fs.readFile("quotes.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading quotes file:", err);
    return;
  }
  quotes = JSON.parse(data);
  console.log("Total num of quotes:", quotes.length);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quote", (req, res) => {
  if (quotes.length === 0) {
    return res.status(500).send("Quotes not available");
  }
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(port, () => {
  console.log(`Athlete Quotes API listening at http://localhost:${port}`);
});
