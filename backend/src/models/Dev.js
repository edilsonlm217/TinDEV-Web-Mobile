const { Schema, model } = require('mongoose'); //importando Schema e model de dentro do Mongoose


//Define a estrutura da tabela DEV dentro do banco de dados
const DevSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, //cria automaticamente as colunas CreatedAT e UpdatedAT
});

module.exports = model('Dev', DevSchema);