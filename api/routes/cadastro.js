module.exports = app => {
    var controller = app.controllers.cadastro;

    app.get('/cadastro', controller.get);
    app.post('/cadastro', controller.post);
};