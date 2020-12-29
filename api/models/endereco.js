module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var enderecoSchema = new Schema(
        {
            logradouro: {
                type: String,
            },
            numero: {
                type: String,
            },
            complemento: {
                type: String,
            },
            bairro: {
                type: String,
            },
            cidade: {
                type: String,
            },
            estado: {
                type: String,
            },
            cep: {
                type: String,
            },
        }
    );
        
    var enderecoModel = mongoose.model('Endereco', enderecoSchema);
        
    return enderecoModel;
};