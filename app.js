const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));
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

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + "/public/pages/principales/formulario.html");
});



app.get('/f1', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F1.html");
});

app.get('/f2', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F2.html");
});

app.get('/f3', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F3.html");
});

app.get('/f4', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F4.html");
});

app.get('/f5', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F5.html");
});

app.get('/f6', (req, res) => {
    res.sendFile(__dirname + "/public/pages/secundarias/F6.html");
});


//form

app.post('/contacto', (req, res) => {

    const {
        nombre,
        direccion,
        correo,
        mensaje
    } = req.body;

    contenHTML = `
    <h1> Información para contacto </h1>

   <p>
   <h3>${nombre}</h3>
   </p>
   
   <p>
   <h3>${direccion}</h3>
   </p>

   <p>
   <h3>${correo}</h3>
   </p>

    <p>
    <h3>${mensaje}</h3>
    </p>
    `
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yamilethp697@gmail.com',
            pass: 'allweneedislove'
        }
    });

    const info = {
        from: 'yamilethp697@gmail.com',
        to: 'yamilethp697@gmail.com',
        subecjt: 'Datos para contactar',
        html: contenHTML
    }

    transporter.sendMail(info, error => {
        if (error) {
            throw error;
        } else {
            console.log('email enviado');
        }
    })
    res.sendFile(__dirname + "/public/pages/principales/finalhtml.html");
});



app.listen(port, () => console.log(`app listening on port ${port}`));