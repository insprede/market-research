const express = require('express');
const path = require('path');
const parser = require('body-parser');

/******************************************************************
  General Setup
******************************************************************/
const app = express();
const port = process.env.PORT || 8000;

app.use(parser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  console.log(`serving ${req.method} request on ${req.url}`);
  next();
});

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

/******************************************************************
  Start Server
******************************************************************/

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
