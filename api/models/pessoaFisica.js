module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var pessoaFisicaSchema = new Schema(
        {
            cpf: String,
            genero: String,
            dataNascimento: Date,
            pessoaDados: { type: Schema.Types.ObjectId, ref: 'Pessoa' },
        }
    );
        
    var pessoaFisicaModel = mongoose.model('PessoaFisica', pessoaFisicaSchema);
        
    return pessoaFisicaModel;
};