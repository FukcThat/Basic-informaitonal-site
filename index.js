const express = require("express");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = 8080;

app.use(express.static(assetsPath));
console.log("Serving static files from:", assetsPath);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`All g - listening on port ${PORT}`);
});
