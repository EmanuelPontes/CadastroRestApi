const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = app => {
    var controllerMain = {
        get: function(req, res, next) {
            var jwtCookie = req.cookies["authToken"];
            const jwtSecret = config.get("jwt.secret");
            var decodedJWT = jwt.verify(jwtCookie, jwtSecret);

            res.render('mainPage', {page: 'getUsersForm',  admin: decodedJWT.username, get: "active", post: "", icon: "fa-search", iconLabel: "Consultar"});
        }
    };

    return controllerMain;
};