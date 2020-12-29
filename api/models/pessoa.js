module.exports = app => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var pessoaSchema = new Schema(
        {
            nome: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            telefone: String,
            celular: String,
            fotoUrl: String,
            enderecos: [{ type: Schema.Types.ObjectId, ref: 'Endereco'}]  
        }
    );

    var pessoaModel = mongoose.model('Pessoa', pessoaSchema);

    return pessoaModel;
};