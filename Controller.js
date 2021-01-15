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

app.get('/read', async (req,res)=>{
    let read=await user.findAll({
        raw:true,
    });
    console.log(read);
});

app.get('/update', async (req,res)=> {
    let update=await user.findByPk(4).then((response)=>{
            response.name='alterado';
            response.password='1234';
            response.save();
    });
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
}); 