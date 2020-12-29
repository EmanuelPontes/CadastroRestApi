module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var pessoaJuridicaSchema = new Schema(
        {
            cnpj: {
                type: String,
                required: true,
                maxLength: 15,
                minLength: 15,
            },
            razaoSocial:  {
                type: String,
                required: true
            },
            pessoaDados: { type: Schema.Types.ObjectId, ref: 'Pessoa' },
        }
    );
        
    var pessoaJuridicaModel = mongoose.model('PessoaJuridica', pessoaJuridicaSchema);
        
    return pessoaJuridicaModel;
}; 