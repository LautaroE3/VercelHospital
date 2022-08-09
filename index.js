const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

app.use(express.static('public'));

//Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
//Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));

app.get('/test', (req, res) => {
    console.log('holas');
    res.render('pagina');
});

app.get('/', (req, res) => {
    res.render('pagina');
    //Conexión al cloud de Mongodb Atlas ...
    mongoose
        .connect('mongodb+srv://hrgarcia:EaFhXeNfxbG277Zz@cluster0.fs8tm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        .then((con) => {
            res.render('pagina');
        });
});

app.listen(process.env.PORT || 3000);

module.exports = app;
