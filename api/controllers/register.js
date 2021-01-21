const bcrypt = require('bcrypt');

module.exports = app => {

    var controllerRegister = {
        get: function(req, res, next) {
            res.render('loginPage', {presentation:"Cadastre-se",form: "registerForm", request:"/", requestIcon:"fa-user" ,requestName: "Fazer Login"});
        },
        post: function(req, res, next) {

            var dataObj = req.body;
            var userModel = app.models.user;
            var dbUtil = app.lib.dbUtil;

            dbUtil.find({user: dataObj.user}, userModel).then(
                (foundUserArr) => {
                    var userAuth = false;
                    for(foundUserObj of foundUserArr) {

                        if (foundUserObj.user === dataObj.user) {
                            res.status(400).send("Usuário já cadastrado, tente novamente");
                            return;
                        }
                        
                    }
                }
            ).catch(
                (e) => {
                    console.log("falha ao buscar usuario existente");
                    console.log(e);
                    res.status(400);
                    return;
                }
            );    

            if (dataObj.password === dataObj.confirmPassword) {
                var hashCost = 12;
                dataObj.password = bcrypt.hashSync(dataObj.password, hashCost);
            } else {
                res.status(400).send("Senhas diferentes, tente novamente");
                return;
            }

            


            dbUtil.save(dataObj, userModel).then((userID) => {
                console.log("usuario salvo id:");
                console.log(userID);
                res.status(200).send();
            }).catch(
                (e) => {
                    console.log("falha ao salvar novo usuario");
                    console.log(e);
                    res.status(400).send("Falha ao cadastrar novo usuario, tente novamente");
                    return;
                }
            );
        }
    };

    return controllerRegister;
};