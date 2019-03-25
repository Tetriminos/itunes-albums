const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const STATIC_SITE_PATH = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 80;

const app = express();
app.use(serveStatic(STATIC_SITE_PATH));

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
