module.exports = app => {
    var controllerLogout = {
        get: function(req, res, next) {
            res.clearCookie('authToken');
            res.status(200).redirect('/');
        }
    };

    return controllerLogout;
};