module.exports = function(app) {
    var controllerAuth = {
        validate: function(req, res, next) {
            var userObj = req.body;

            var authUtil = require('../lib/authUtil')(app);

            var userModel = app.models.user;
            var dbUtil = app.lib.dbUtil;

            dbUtil.find({user: userObj.user}, userModel).then(
                (foundUserArr) => {
                    var userAuth = false;
                    for(foundUserObj of foundUserArr) {
                        userAuth = (userObj.password == foundUserObj.password) ? true : false;
                        if (userAuth) {
                            break;
                        }
                    }
                    if(userAuth) {

                        const jwt = require('jsonwebtoken');
                        const config = require('config');
        
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
                res.status(500).send();
            });

            
        }
    };

    return controllerAuth;
};