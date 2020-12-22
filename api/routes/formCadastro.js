module.exports = app => {

    /**Acessando modulo indexado no objeto express() */
    var controllerFormCadastro = app.controllers.formCadastro;
    console.log("getCadastroForm")
    /* GET home page. */
    app.get('/formcadastro', controllerFormCadastro.getPage);
    /* POST home page. */
    app.post('/formcadastro', controllerFormCadastro.postData);

};