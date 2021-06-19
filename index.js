const express = require('express');
const app = express();

const alasql = require('alasql');

var cors = require('cors');

alasql("CREATE TABLE Cursos(id INT, nombre STRING, nota NUMBER)");

alasql("INSERT INTO Cursos (id, nombre,nota) VALUES(1,'Desarrollo de Aplicaciones Web',19)");

alasql("INSERT INTO Cursos (id, nombre,nota) VALUES(2,'Base de datos',17)");

alasql("INSERT INTO Cursos (id, nombre,nota) VALUES(3,'Ingeniería de Software',15)");


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*")
  next();
});



app.get('/',(req,res)=>{
  res.setHeader('Content-Type','application/json');

  res.end(JSON.stringify(alasql("SELECT * FROM Cursos Where nota>15")));
});

app.listen(8080,()=>{
  console.log('servidor iniciado...')
});
