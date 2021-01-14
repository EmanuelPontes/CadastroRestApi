const mongoose = require('mongoose');
module.exports = app => {
    var Schema = mongoose.Schema;
        
    var pessoaFisicaSchema = new Schema(
        {
            cpf: {
                type: String,
                unique:true,
                dropDups: true, 
                required: true,
                maxLength: 14,
                minLength: 14,
            },
            genero: {
                type: String,
                required: true
            },
            dataNascimento: {
                type: Date,
                required: true
            },
            pessoaDados: { type: Schema.Types.ObjectId, ref: 'Pessoa' },
        }
    );
        
    var pessoaFisicaModel = mongoose.model('PessoaFisica', pessoaFisicaSchema);
        
    return pessoaFisicaModel;
};