var database = {
    CreateConnection: function () {

        var config = require('config');
        var mongoose = require('mongoose');

        var dbUrl = config.get('database.url');

        var options = config.get('database.options');
                
        var db = mongoose.connect(dbUrl, options);

        return db;
            
    }
};

module.exports = database;