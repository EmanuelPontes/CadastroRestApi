module.exports = app => {
    var controllerIndex = {
        get: function(req, res, next) {
            res.render('login');
        }
    };

    return controllerIndex;
};