const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })

app.get("/",(req, res) =>{
    res.render('index', {bot: settings.website})
})
app.get("/commands", (req, res) => {
    res.render("commands", {bot: settings.website, commands: settings.commands})
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
  
  app.get('/commands', (req, res) => {
    res.send('This is my about route..... ')
  })

const listener = server.listen(8000, function() {
    console.log("Your app is listening on port" + listener.address().port);
})

module.exports = app