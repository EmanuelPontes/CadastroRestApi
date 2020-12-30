module.exports = app => {

    var controllerFormCadastro = {
        getPage: function(req, res, next) {
            res.render('formCadastro');
        },
    }

    return controllerFormCadastro;
};