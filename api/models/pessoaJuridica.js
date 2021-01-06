module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
        
    var pessoaJuridicaSchema = new Schema(
        {
            cnpj: {
                type: String,
                unique:true,
                dropDups: true, 
                required: true,
                maxLength: 18,
                minLength: 18,
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