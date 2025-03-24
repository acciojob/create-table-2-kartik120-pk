function createTable() {
    // Get user input for rows and columns
    let rn = prompt("Input number of rows"); // Ensure exact text
    let cn = prompt("Input number of columns"); // Ensure exact text

    // Convert input to integers
    rn = parseInt(rn, 10);
    cn = parseInt(cn, 10);

    // Validate user input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // Insert a new row
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // Insert a new cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
