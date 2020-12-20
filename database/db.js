var database = {
    createConnection: function () {

        var config = require('config');
        var mongoose = require('mongoose');

        var connectionUrl = config.get('database.url');

        var connectionOptions = config.get('database.options');
                
        mongoose.connect(connectionUrl, connectionOptions).then(
            () => {
                console.log("Connected to " + connectionUrl + "/" + connectionOptions.dbname);
            },
            (err) => {
                console.log("Failed to connect to" + connectionUrl + "/" + connectionOptions.dbname);
                console.log(err);
            }
        );
            
    }
};

module.exports = database;