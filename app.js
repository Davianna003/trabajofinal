const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;




app.get('/', (req, res) => {
    res.render('page/final');
});

app.get('/nosotros', (req, res) => {
    res.render('page/nosotros');
});

app.get('/productos', (req, res) => {
    res.render('page/productos');
});

app.get('/testimonios', (req, res) => {
    res.render('page/testimonios');
});

app.get('/contacto', (req, res) => {
    res.render('page/formulario');
});



app.get('/f1', (req, res) => {
    res.render('page/F1');
});

app.get('/f2', (req, res) => {
    res.render('page/F2');
});

app.get('/f3', (req, res) => {
    res.render('page/F3');
});

app.get('/f4', (req, res) => {
    res.render('page/F4');
});

app.get('/f5', (req, res) => {
    res.render('page/F5');
});

app.get('/f6', (req, res) => {
    res.render('page/F6');
});


//form
app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


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
            user: 'avadoreavadore003@gmail.com',
            pass: 'avadore003'
        }
    });

    const info = {
        from: 'avadoreavadore003@gmail.com',
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
    res.render('page/final');
});

app.listen(port, () => console.log(`app listening on port ${port}`));