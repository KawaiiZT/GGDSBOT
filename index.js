const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));
const PORT = 4000

app.get("/",(req, res) =>{
    res.render('index', {bot: settings.website})
})
app.get("/commands", (req, res) => {
    res.render("commands", {bot: settings.website, commands: settings.commands})
})

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
})

module.exports = app