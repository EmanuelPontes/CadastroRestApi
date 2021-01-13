module.exports = function(app) {
    /**Acessando modulo indexado no objeto express() */
    var controllerLogout = app.controllers.logout;
    /* GET home page. */
    app.get('/logout', controllerLogout.get);
};