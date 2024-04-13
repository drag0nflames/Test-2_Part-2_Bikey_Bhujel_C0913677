// Function to generate the initial table based on user input
function generateTable() {
    var rows = parseInt(document.getElementById("t1").value);
    var cols = parseInt(document.getElementById("t2").value);
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }
    var tableHTML = "<table border='1'>";
    for (var i = 0; i < rows; i++) {
        tableHTML += "<tr>";
        for (var j = 0; j < cols; j++) {
            tableHTML += "<td>Cell</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.body.innerHTML = "<button id='b2' onclick='addColumn()'>Add Column</button><button id='b3' onclick='addRow()'>Add Row</button>" + tableHTML;
    
}

// Function to add a column to the table
function addColumn() {
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].innerHTML += "<td>Cell</td>";
    }
}

// Function to add a row to the table
function addRow() {
    var table = document.querySelector("table");
    var cols = table.rows[0].cells.length;
    var newRow = "<tr>";
    for (var i = 0; i < cols; i++) {
        newRow += "<td>Cell</td>";
    }
    newRow += "</tr>";
    table.innerHTML += newRow;
}