const table = document.createElement('table');
const header = table.createTHead();
const headerRow = header.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

studentsList.forEach(student => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
});

table.appendChild(tbody);
document.body.appendChild(table);
