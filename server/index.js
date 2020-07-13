const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', './dist/popup.html'));
  });

app.listen(port, () => {
    console.log(`app listening at localhost:${port}`)
})