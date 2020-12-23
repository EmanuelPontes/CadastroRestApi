module.exports = app => {
    var dbUtil = {
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

