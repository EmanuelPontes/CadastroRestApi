const mongoose = require('mongoose');
module.exports = app => {
    var Schema = mongoose.Schema;
        
    var usuario = new Schema(
        {
            user: {
                type: String,
                unique:true,
                dropDups: true, 
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            
        }
    );
        
    var UserModel = mongoose.model('User', usuario);
        
    return UserModel;
};