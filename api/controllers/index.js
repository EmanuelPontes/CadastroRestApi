module.exports = app => {
    var controllerIndex = {
        get: function(req, res, next) {
            res.render('loginPage', {presentation:"Bem-vindo",form: "loginForm", request:"/register", requestIcon:"fa-user-plus" ,requestName: "Registrar-se"});
        }
    };

    return controllerIndex;
};