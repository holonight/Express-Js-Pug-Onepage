const express = require("express");
var path = require('path')
const dotEnvt = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const ProfileRoute = require("./routes/ProfileRoute");
const ProfileSlug = process.env.ProfileSlug;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("ProfileSlug", ProfileSlug);
app.set("views", './resources/View')

app.use(ProfileSlug, ProfileRoute);

app.get('*', function(req, res) {
    res.status(404);
    res.render("404", { returnurl: ProfileSlug, pageTitle: "404 Hata" });
});

app.listen(8000);