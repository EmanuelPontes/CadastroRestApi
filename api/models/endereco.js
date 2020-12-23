module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var enderecoSchema = new Schema(
        {
            logradouro: String,
            numero: String,
            complemento: String,
            bairro: String,
            cidade: String,
            estado: String,
            cep: String
        }
    );
        
    var enderecoModel = mongoose.model('Endereco', enderecoSchema);
        
    return enderecoModel;
};