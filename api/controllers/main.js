module.exports = app => {
    var controllerMain = {
        get: function(req, res, next) {
            res.render('mainPage', {page: 'getUsersForm', get: "active", post: "", icon: "fa-search", iconLabel: "Consultar"});
        }
    };

    return controllerMain;
};