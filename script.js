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