const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models = require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let user = models.User;
let tracking = models.Tracking;
let product = models.Product;

app.get('/create',async (req,res)=>{
    let create=await user.create({
        name: "novo",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
}); 