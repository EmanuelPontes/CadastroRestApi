module.exports = function(app) {
    var controllerAuth = {
        validate: function(req, res, next) {
            var userObj = req.body;
            console.log(userObj);
            if((userObj.user == "admin") && (userObj.password == "12345")) {
                console.log("Usuario aprovado");
                res.redirect('/formcadastro');
            } else {
                console.log("Usuario reprovado;")
            }
        }
    };

    return controllerAuth;
};