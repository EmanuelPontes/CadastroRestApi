module.exports = app => {
    var dbUtil = {

        find: async function(filterObj, Model) {
            var foundObj = await Model.find(filterObj).select("-_id -__v").exec();    
            
            return foundObj;
        },

        save: async function (dataObj, Model) {
                
            var modelObj = new Model(dataObj);
            
            await modelObj.save();
        
            return modelObj._id;
        },
        saveArray: async function (dataObjArray, Model) {
            
            var dataObjIdArray = [];

            for(let dataObj of dataObjArray) {

                dataObjId = await this.save(dataObj, Model);
                
                dataObjIdArray.push(dataObjId);
            }

            return dataObjIdArray;
        }
    }


    return dbUtil;
}

