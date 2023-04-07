const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const maps = [
    { title: "Name1", id: "1" },
    { title: "Name2", id: "2" },
    { title: "Name3", id: "3" },
];

app.get("/", (req, res) => {
    res.render("main", { maps });
});

app.listen(3000, () => {
    console.log("Listening оn port 3000");
});