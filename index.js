const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Assalamu Alaikum! I'm working good.")
})

app.listen(4000);