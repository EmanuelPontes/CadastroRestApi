module.exports = app => {
    var mainController = app.controllers.main;

    var authUtil = require('../lib/authUtil')(app);
    
    app.get("/main", authUtil.validateSession, mainController.get);
};