module.exports = app => {
    var controllerIndex = {
        get: function(req, res, next) {
            res.status(200).send('Index get Ok');
        }
    };

    return controllerIndex;
};