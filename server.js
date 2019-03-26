const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const request = require('request-promise-native');

const STATIC_SITE_PATH = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const app = express();

// Apple lookup API doesn't support CORS, so we have a simple proxy route for an album id
app.get('/proxy/songs/:albumId', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const albumId = req.params.albumId;
  const response = await request.get(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`);
  res.status(200).send(response);
});

app.use(serveStatic(STATIC_SITE_PATH));

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
