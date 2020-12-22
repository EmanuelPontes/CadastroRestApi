module.exports = app => {

    var controllerFormCadastro = {
        getPage: function(req, res, next) {
            res.render('formCadastro');
        },

        postData: function(req, res, next) {
            console.log("dados cadastrais:");
            console.log(req.body);
            res.status(200).send();
        }
    }

    return controllerFormCadastro;
};