module.exports = app => {
    var controllerMain = {
        get: function(req, res, next) {
            res.render('mainPage');
        }
    };

    return controllerMain;
};