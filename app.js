const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/pages/principales/finalhtml.html");
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + "/public/pages/principales/nosotros.html");
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + "/public/pages/principales/menuhtml.html");
});

app.get('/testimonios', (req, res) => {
    res.sendFile(__dirname + "/public/pages/principales/testimonios.html");
});


app.listen(port, () => console.log(`app listening on port ${port}`));