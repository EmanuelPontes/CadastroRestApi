module.exports = app => {

    /**Acessando modulo indexado no objeto express() */
    var controllerFormCadastro = app.controllers.formCadastro;
    
    var authUtil = require('../lib/authUtil')(app)

    /* GET home page. */
    app.get('/formcadastro', authUtil.validateSession, controllerFormCadastro.getPage);

};