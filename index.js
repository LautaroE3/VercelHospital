const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

app.use(express.static('public'));

app.get('/', (req, res) => {
    //Conexión al cloud de Mongodb Atlas ...
    mongoose
        .connect('mongodb+srv://hrgarcia:EaFhXeNfxbG277Zz@cluster0.fs8tm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        .then((con) => {
            //console.log(con.connections);
            res.sendFile('index.html', { root: path.join(__dirname, 'public') });
        });
});

//Carga de variables de entorno
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

app.listen(process.env.PORT || 3000);

module.exports = app;
