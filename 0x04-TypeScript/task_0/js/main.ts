interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

// 1. Create table and tbody (keeping your structure)
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// 2. ADD THIS: Create table headers
const thead = table.createTHead();
const headerRow = thead.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

// 3. MODIFIED VERSION of your row creation (more efficient)
studentsList.forEach((student: Student) => {
  const row = tbody.insertRow(); // Changed from createElement('tr')
  
  // These replace createElement('td') calls
  const firstNameCell = row.insertCell(); 
  const locationCell = row.insertCell();
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// 4. Append everything (unchanged)
table.appendChild(tbody);
document.body.appendChild(table);
