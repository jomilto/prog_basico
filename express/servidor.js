var express = require('express');
var app = express();

app.get('/', home);
app.get('/cursos', cursos);

function home(req, res) {
    res.send("Hello wold genial")
}

function cursos(req, res) {
    res.send("aqui estan los cursos")
}

app.listen(3000);