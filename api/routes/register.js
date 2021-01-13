module.exports = app => {
    var controller = app.controllers.register;

    app.get('/register', controller.get);
    app.post('/register', controller.post);
};