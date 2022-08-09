const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

//Carga de variables de entorno
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//Conexión al cloud de Mongodb Atlas ...
mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then((con) => {
        //console.log(con.connections);
        console.log('Connected to database');
    });

app.listen(process.env.PORT || 3000);

module.exports = app;
