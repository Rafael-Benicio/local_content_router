const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static('assets'));
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/Eps", (req, res) => {
  fs.readdir('./videos/Eps', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).json({listEpisode:Array(files)});
    // console.log(Array(files));
  });
})

app.listen(port);
console.log('Server started at http://localhost:' + port);