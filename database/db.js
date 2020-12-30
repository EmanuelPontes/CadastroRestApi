var database = {
    CreateConnection: async function (dbName) {

        var config = require('config');
        var mongoose = require('mongoose');

        var dbUrl = config.get('database.url') + ((dbName == undefined) ? config.get('database.dbName') : dbName);

        var options = config.get('database.options');
                
        var db = await mongoose.connect(dbUrl, options);

        console.log("connected to " + dbUrl);

        return db;
            
    },

    Drop: async function () {

        var mongoose = require('mongoose');
        
        console.log("estado db:");
        console.log(mongoose.connection.readyState);
        if (mongoose.connection.readyState != 1) {
            console.log("Nao pode deletar db nao conectada")
            return;
        }

        try {
            await mongoose.connection.db.dropDatabase();
        } catch(e) {
            console.log(e);
        }
        
            
    },

    DropCollection: async function (collectionName) {

        var mongoose = require('mongoose');
        
        if (mongoose.connection.readyState != 1) {
            return;
        }

        try {
            await mongoose.connection.db.dropCollection(collectionName);
        } catch(e) {
            console.log(e);
        }
            
    },

    Disconnect: async function () {

        var mongoose = require('mongoose');
        
        if (mongoose.connection.readyState != 1) {
            return;
        }

        try {
            await mongoose.disconnect();
        } catch(e) {
            console.log(e);
        }
    }
};

module.exports = database;