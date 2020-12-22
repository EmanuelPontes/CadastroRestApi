module.exports = function(app) {
    /**Acessando modulo indexado no objeto express() */
    var controllerAuth = app.controllers.auth;
    /* GET home page. */
    app.post('/auth', controllerAuth.validate);
};