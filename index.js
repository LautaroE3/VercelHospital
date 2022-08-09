const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

//Configurando archivos estáticos
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
//Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

app.get('/test', (req, res) => {
    //Conexión al cloud de Mongodb Atlas ...
    mongoose
        .connect('mongodb+srv://hrgarcia:EaFhXeNfxbG277Zz@cluster0.fs8tm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        .then((con) => {
            console.log('Conectado a la DB');
            res.render('head');
        });
});

app.get('/', (req, res) => {
    console.log('Dominio principal');
    res.render('head');
});

module.exports = app;
