const express = require('express');
const http = require('http')
const app = express();
const axios = require("axios")

app.get('/api/players', (req, res) => {
  let players = {}
  
  axios.get("https://football-players-b31f2.firebaseio.com/players.json")
  .then((res) =>{
    players = res.data
    players.forEach(element => {
      console.log(element.name)
    });
    
  })
  .catch((err) => {
    console.log(err)
  })
  res.send(players)
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`); 