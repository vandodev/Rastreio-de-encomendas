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
    let update=await user.findByPk(1,
        {include:[{all:true}]}
        ).then((response)=>{
            response.Trackings[0].local='Nova alterado';
            response.Trackings[0].save();
    });
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
}); 