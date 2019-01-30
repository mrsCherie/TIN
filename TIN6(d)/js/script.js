"use strict";
function addRows(rows) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1)
    row.innerHTML= rows.value;
}