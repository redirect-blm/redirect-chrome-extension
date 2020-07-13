const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const staticPath =
  process.env.NODE_ENV === `production`
    ? path.join(__dirname, `..`, `./dist`)
    : path.join(__dirname, `..`, `./dev`);
app.use(express.static(staticPath));

app.get('*', (req, res) => {
    return res.sendFile(`${staticPath}/popup.html`);
});

app.listen(port, () => {
    console.log(`app listening at localhost:${port}`)
})