const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


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
        console.log(cell1, cell2, cell3, cell4)
    }
    // Check if the character is a comma, indicating the end of a cell - After cell1 (ID) -> cell2 (Name) -> cell 3 (Occ) -> cell4 (age) - This all forms the first row before the new line (\n)
    else if (char === ',') {
        currentCell++
    }
    // Check if the character is a newline, indicating the end of a row
    else if (char === '\n') {
        // Log and print the current row's data
        console.log(cell1, cell2, cell3, cell4)

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