module.exports = app => {
    var mainController = app.controllers.main;

    app.get("/main", mainController.get);
};