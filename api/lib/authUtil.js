module.exports = (app) => {

    var authUtil = {

        decryptData: function(publicKey, encryptedData) {
            var rsaKeyPairArr = app.locals.rsaKeyPairs;

            var buff = new Buffer.from(encryptedData, 'base64');
            for(rsaObj of rsaKeyPairArr) {

                console.log(rsaObj);

                if(Object.keys(rsaObj)[0] == publicKey) {
                    var privateKey = rsaObj[publicKey];
                    const cripto = require('crypto');
                    const decryptedData = cripto.privateDecrypt(
                        {
                            key: privateKey,
                            // In order to decrypt the data, we need to specify the
                            // same hashing function and padding scheme that we used to
                            // encrypt the data in the previous step
                            padding: cripto.constants.RSA_NO_PADDING,
                            oaepHash: "sha256",
                        },
                        buff
                    )

                    console.log(decryptedData);

                    return decryptedData;
                }
            }

            return "";
        },

        generateRsaKeyPair: function() {
            const cripto = require('crypto');

            const { publicKey, privateKey } = cripto.generateKeyPairSync("rsa", {
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: 'spki',
                    format: 'pem'
                },
                privateKeyEncoding: {
                    type: 'pkcs8',
                    format: 'pem',
                }
            });

            var keyPair = {
                publicKeyValue: publicKey,
                privateKeyValue: privateKey
            }

            return keyPair;
        },

        validateSession: function(req, res, next) {

            const token = req.cookies['authToken'];

            if (token) {
                const config = require('config');
                const jwt = require('jsonwebtoken');
                
                const jwtSecret = config.get("jwt.secret");
                console.log("jwt token verificando");
                jwt.verify(token, jwtSecret, (err, user) => {
                    if (err) {
                        return res.status(403).send();
                    }
        
                    req.user = user;
                    next();
                    console.log("jwt token ok");
                });
            } else {
                res.status(401).redirect('/');
                console.log("jwt token falha");
            }
        },

        generateToken: function (tokenSize) {
            const cripto = require('crypto');
            return cripto.randomBytes(tokenSize).toString('hex');
        }
    }

    return authUtil;
};