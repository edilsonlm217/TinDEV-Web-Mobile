const express = require('express'); //importando express
const routes = require('./routes'); //importando o arquivo routes
const mongoose = require('mongoose'); //importando mongoose - mongoose permite manipular o DB usando unicamente javaScript
const cors = require('cors');

const server = express(); //criando um servidor do express

//conectando o server ao banco de dados através do mongoose
mongoose.connect('mongodb+srv://edilson:edilson@cluster0-dmaf2.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
}); 

server.use(cors());
server.use(express.json()); //difinindo que as informações de qualquer requisição estarão em JSON
server.use(routes);  //definindo que nosso server deve usar o arquivo routes importado na linha 2

server.listen(3333); //definindo a porta que meu servidor vai ouvir