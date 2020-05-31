const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String
    },
    apelido: { 
        type: String, 
        required: true, 
        index: true, 
        unique: true 
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    dataNascimento: {
        type: Date
    },
    senha: {
        type: String,
        required: true,
        select: false,
        min: 6,
        max: 1024
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});


PessoaSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Pessoa', PessoaSchema);