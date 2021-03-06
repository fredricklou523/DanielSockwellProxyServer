const express = require('express');
const path = require('path');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(express.static(`${__dirname}./../../dist`));

app.get('/product/:productId', (req, res) => {
  if (req.params.productId === 'random') {
    res.redirect(`/product/${Math.floor(Math.random() * 100) + 1}`);
  } else {
    const options = { headers: { 'Content-Type': 'text/html' } };
    const file = path.join(`${__dirname}./../index.html`);
    console.log('file is', file);
    res.sendFile(file, options);
  }
});

module.exports = { app };
