const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// Declare a variable that stores the number of columns in each row of data within the CSV. Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
let rows = csv.split("\n")
let headers = rows[0].toLowerCase()
let columns = headers.split(",") // Each piece of data separated by a comma is a column
let columnCount = columns.length
// console.log(columnCount) 

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
let rowData = []
for (let row in rows) {
    rowData[rowData.length] = rows[row].split(",")
}
// console.log(rowData)

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
let newRowData = []

for (let i=1; i<rows.length; i++) {
    let values = rows[i].split(",")
    let newObj = {}
    
    for (let j=0; j<values.length; j++){
        newObj[columns[j]] = values[j]
    }
    newRowData.push(newObj)
}
console.log(newRowData)


let cell1 = ""
let cell2 = ""
let cell3 = ""
let cell4 = ""

// Index to track which cell we're currently filling in the loop
let currentCell = 0

// Loop through each character in the CSV data
for (let i = 0; i <= csv.length; i++) {
    let char = csv[i]
    if (i === csv.length) { // This allows for the last row to be added since there's no \n after it
        // console.log(cell1, cell2, cell3, cell4)
    }
    // Check if the character is a comma, indicating the end of a cell - After cell1 (ID) -> cell2 (Name) -> cell 3 (Occ) -> cell4 (age) - This all forms the first row before the new line (\n)
    else if (char === ',') {
        currentCell++
    }
    // Check if the character is a newline, indicating the end of a row
    else if (char === '\n') {
        // Log and print the current row's data
        // console.log(cell1, cell2, cell3, cell4)

        // Reset cell variables for the next row
        cell1 = ""
        cell2 = ""
        cell3 = ""
        cell4 = ""

        // Reset cell index for the new row
        currentCell = 0
    }
    // If it's a regular character, add it to the current cell's data
    else {
        if (currentCell === 0) cell1 += char
        else if (currentCell === 1) cell2 += char
        else if (currentCell === 2) cell3 += char
        else if (currentCell === 3) cell4 += char
    }
}