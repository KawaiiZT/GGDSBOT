const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));
const PORT = 4000;

app.get("/", (req, res) => {
    res.render('index', { bot: settings.website });
});

app.get("/commands", (req, res) => {
    res.render("commands", { bot: settings.website, commands: settings.commands });
});

app.get('/about', (req, res) => {
    res.send('Hey, this is my about route...');
});

// Define a catch-all route for other undefined routes
app.get('*', (req, res) => {
    res.send('This is my API running 🥳');
});

const listener = server.listen(PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
});