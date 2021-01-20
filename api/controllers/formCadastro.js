const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = app => {

    var controllerFormCadastro = {
        getPage: function(req, res, next) {
            var jwtCookie = req.cookies["authToken"];
            const jwtSecret = config.get("jwt.secret");
            var decodedJWT = jwt.verify(jwtCookie, jwtSecret);

            res.render('mainPage', {page: 'postUsersForm', admin: decodedJWT.username, get: "", post: "active", icon: "fa-user-plus", iconLabel: "Cadastrar"});
        },
    }

    return controllerFormCadastro;
};