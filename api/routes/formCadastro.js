module.exports = app => {

    /**Acessando modulo indexado no objeto express() */
    var controllerFormCadastro = app.controllers.formCadastro;
    /* GET home page. */
    app.get('/formcadastro', controllerFormCadastro.getPage);

};