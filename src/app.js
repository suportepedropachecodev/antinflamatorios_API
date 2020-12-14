const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const classmongodb = require('./mod/classmongo')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get("/antinflamatorios", async(req,res)=>{
    res.status = 200;
    let registros = await classmongodb.todosregistros();
    res.json(registros);
});

app.set('porta', process.env.PORT || 3000);

app.listen(app.get('porta'),()=>{
    console.log('Servidor rodando na porta', app.get('porta'));
});