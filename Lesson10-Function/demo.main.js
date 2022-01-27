// 
function addColumn(myTable) {
    var table = document.getElementById(myTable);
    var row = table.getElementsByTagName('tr');
    for (i=0; i<row.length; i++) {
        row[i].innerHTML = row[i].innerHTML + '<td></td>';
    }
}

function deleterow(tblId)
{
      var table = document.getElementById(tblId);
      var row = table.getElementsByTagName('tr');
      if (row.length != '1') {
          row[row.length - 1].outerHTML = '';
      }
}

function deleteColumn(tblId)
{
    var allRows = document.getElementById(tblId).rows;
    for (var i=0; i<allRows.length; i++) {
        if (allRows[i].cells.length > 1) {
            allRows[i].deleteCell(-1);
        }
    }
}

function myFunction(myTable) {
    var table = document.getElementById(myTable);
    var row = table.getElementsByTagName('tr');
    var row = row[row.length-1].outerHTML;
    table.innerHTML = table.innerHTML + row;
    var row = table.getElementsByTagName('tr');
    var row = row[row.length-1].getElementsByTagName('td');
    for(i=0; i<row.length; i++) {
        row[i].innerHTML = '';
    }
}