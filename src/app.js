const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const DB = {
    antinflamatorios: [
        {
            quando: '10:24-12/12/2020',
            farmacia: 'DROGARIAPACHECO',
            nome: 'Deocil Sl Diffucap 10 Comprimidos',
            precovelho: '',
            preconovo: '',
            precoregular : '27.19',
            urlproduto : 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/604291-180-180/VSPM.jpg?v=637064450715100000'
        },
        {
            quando: '10:24-12/12/2020',
            farmacia: 'DROGARIAPACHECO',
            nome: 'Paracetamol 20 Comprimidos',
            precovelho: '',
            preconovo: '',
            precoregular : '120.90',
            urlproduto : 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/604291-180-180/VSPM.jpg?v=637064450715100000'
        }
    ]
};

app.get("/antinflamatorios", async(req,res)=>{
    res.status = 200;
    res.json(DB)
});

app.set('porta', process.env.PORT || 3000);

app.listen(app.get('porta'),()=>{
    console.log('Servidor rodando na porta', app.get('porta'));
});