const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(app) {
    var controllerAuth = {
        validate: function(req, res, next) {
            var userObj = req.body;

            var authUtil = require('../lib/authUtil')(app);

            var userModel = app.models.user;
            var dbUtil = app.lib.dbUtil;

            console.log("usuario recebido");
            console.log(userObj);
            dbUtil.find({user: userObj.user}, userModel).then(
                (foundUserArr) => {
                    var userAuth = false;
                    for(foundUserObj of foundUserArr) {

                        userAuth = bcrypt.compareSync(userObj.password, foundUserObj.password);

                        if (userAuth) {
                            break;
                        }
                    }
                    if(userAuth) {
        
                        const jwtSecret = config.get("jwt.secret");
        
                        console.log("Usuario aprovado");
        
                        var userAuthJWT = jwt.sign({ username:userObj.user, sub: authUtil.generateToken(16), role: 'admin'}, jwtSecret,  { expiresIn: '15m' });
        
                        res.cookie('authToken', userAuthJWT, {
                            httpOnly: true,
                            expires: new Date(Date.now() + (1000 * 60 * 15)),
                            sameSite: "Lax"
                        });
        
                        res.status(200).send('/main');
                    } else {
                        console.log("Usuario reprovado;");
                        res.status(401).send();
                    }
                }
            ).catch((e) => {
                console.log("Falha ao realizar busca");
                console.log(e);
                res.status(500).send();
            });

            
        }
    };

    return controllerAuth;
};