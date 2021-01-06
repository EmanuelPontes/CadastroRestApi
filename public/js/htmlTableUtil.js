/**
 * 
 * @param {*} tableMatrix = [[headers], [values], [values], [values]]
 */
function createTable(tableMatrix) {
    var table = document.createElement("table");
    var headerCreated = false;
    for (let line of tableMatrix) {
        if (headerCreated == false) {
            createTableHeader(table, line);
            headerCreated = true;
        } else {
            insertTableValues(table, line);
        }
    }

    return table;
}

function createTableHeader(tableObj, keyList) {
    var headerRow = tableObj.insertRow(-1);
    for (let key of keyList) {
        var tHeader = document.createElement("th");
        tHeader.innerHTML = key;
        headerRow.appendChild(tHeader);
    }
    tableObj.tBodies[0].appendChild(headerRow);
}

function insertTableValues(tableObj, valueList) {
    var row = tableObj.tBodies[0].insertRow(-1);
    for (let value of valueList) {
        var cell = row.insertCell(-1);
        cell.innerHTML = value;
    }
}

function insertRowValue(rowObj, value) {
    var cell = rowObj.insertCell(-1);
    cell.innerHTML = value;
}

function insertRowHeaderValue(rowObj, value) {
    var cellHeader = document.createElement("th");
    cellHeader.innerHTML = value;
    rowObj.appendChild(cellHeader);
}