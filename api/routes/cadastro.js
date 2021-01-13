module.exports = app => {
    var controller = app.controllers.cadastro;
    
    var authUtil = require('../lib/authUtil')(app);

    app.get('/cadastro', authUtil.validateSession, controller.get);
    app.post('/cadastro', authUtil.validateSession, controller.post);
};