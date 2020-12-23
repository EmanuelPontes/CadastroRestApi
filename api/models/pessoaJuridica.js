module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var pessoaJuridicaSchema = new Schema(
        {
            cnpj: String,
            razaoSocial: String,
            pessoaDados: { type: Schema.Types.ObjectId, ref: 'Pessoa' },
        }
    );
        
    var pessoaJuridicaModel = mongoose.model('PessoaJuridica', pessoaJuridicaSchema);
        
    return pessoaJuridicaModel;
}; 