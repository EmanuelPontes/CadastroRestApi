module.exports = (app) => { 
    var dataCheckUtil = {  
        preventJsInjection: function(dataObj) {
            for(objKey in dataObj) {
                
                if (typeof dataObj[objKey] === 'string' || dataObj[objKey] instanceof String) {
                    dataObj[objKey] = dataObj[objKey].replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }
                
            }
        }
    }

    return dataCheckUtil;
}