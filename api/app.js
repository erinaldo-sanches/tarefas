const express = require('express');
const app = express();

const db = require('./models/db')

app.get('/', function(req, res){
    res.send('Lista de professores!');
});

app.listen(8080, function(){
    console.log('Servidor inicializado: http://localhost:8080/');
});