const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const now = new Date();
    res.send(now);
    console.log('абоба');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
