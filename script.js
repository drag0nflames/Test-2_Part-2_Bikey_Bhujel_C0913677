// Function to generate the initial table based on user input
function generateTable() {
    var rows = parseInt(document.getElementById("t1").value);
    var cols = parseInt(document.getElementById("t2").value);
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }
    
}