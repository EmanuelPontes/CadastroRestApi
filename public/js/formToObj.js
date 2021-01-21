function formToObj(serializedArrayFormObj) {
    var keyList = [];
    var actualKey = "";
    var arrObj = serializedArrayFormObj;
    for (let obj of arrObj) {
        var str = obj['name'];
        var key = str.split('.');
        keyList.push(key[0]);
    }

    var newArr = Array.from(new Set(keyList.sort()));

    var objP = {};
    for (let arrItem of newArr) {
        if(arrItem.includes('[')) {
            var arrayMatch = arrItem.match(/[a-zA-Z0-9_]+|(?=\[\])/g);
            objP[arrayMatch[0]] = [];
            console.log("É um array")
        } else {
            objP[arrItem] = {};
        }   
    }
    var objTemp = {};
    var notAnObj;
    for (let arrItem of newArr) {
        
        objTemp = {};
        for (let obj of arrObj) {
            var str = obj['name'];
            var key = str.split('.');
            if (arrItem == key[0]) {
                
                if (key[1] === undefined) {
                    objP[arrItem] = obj['value'].replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    notAnObj = arrItem;
                } else {
                    objTemp[key[1]] = obj['value'].replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }
                
                
                
            }
        }

        if(arrItem.includes('[')) {
            var arrayMatch = arrItem.match(/[a-zA-Z0-9_]+|(?=\[\])/g);
            objP[arrayMatch[0]][parseInt(arrayMatch[1])] = objTemp;
            console.log("É um array")
        } else {
            if (arrItem != notAnObj) {
                objP[arrItem] = objTemp;
            }
            
        }
        
    }

    return objP;
}

