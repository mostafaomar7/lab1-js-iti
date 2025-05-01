    let studentName = document.getElementById("studentName");
    let studentGrade = document.getElementById("studentGrade");
    let addBtn = document.getElementById("addBtn");
    let tbody = document.querySelector("#studentsTable tbody");
    let table = document.getElementById("studentsTable");
    let nameError = document.getElementById("nameError");
    let gradeError = document.getElementById("gradeError");
    let sortSelect = document.getElementById("sortSelect");
    let filterSelect = document.getElementById("filterSelect");

    let students = [
        { name: "Eman", grade: 65, department: "EL" },
        { name: "Ahmed", grade: 90, department: "OS" },
        { name: "Mona", grade: 50, department: "EL" }
    ];

    function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    function Duplicate(name) {
        return students.some(student => student.name === name);
    }

    function hideError() {
        nameError.style.display = "none";
        gradeError.style.display = "none";
    }

    function getRowColor(grade) {
        if (grade < 60) return "#ffcccc";        // أحمر
        else if (grade <= 75) return "#cce5ff";  // أزرق فاتح
        else return "#228899";                   // أزرق داكن
    }
    
    function tableOutput(data) {
        tbody.innerHTML = "";
        data.forEach(student => {
            let row = document.createElement("tr");
            row.style.backgroundColor = getRowColor(student.grade); // تلوين الصف حسب الدرجة
    
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td><button onclick="deleteStudent(this, '${student.name}')">Delete</button></td>
            `;
            tbody.appendChild(row);
        });
    }
    

    
    function deleteStudent(button, name) {
        students = students.filter(student => student.name !== name);

        button.parentElement.parentElement.remove();
    }

    addBtn.addEventListener("click", () => {
        hideError();

        let name = studentName.value.trim();
        let grade = parseFloat(studentGrade.value);
        let department = document.querySelector('input[name="department"]:checked').value; // انا الي مجاوب عليها المحاضرة الي فاتت

        if (name === "") {
            nameError.textContent = "Name cannot be empty";
            nameError.style.display = "block";
            return;
        }

        name = capitalize(name);

        if (Duplicate(name)) {
            nameError.textContent = "Name is already in the table";
            nameError.style.display = "block";
            return;
        }

        if (isNaN(grade) || grade < 0 || grade > 100) {
            gradeError.style.display = "block";
            return;
        }

        students.push({ name, grade, department });
        tableOutput(students);

        studentName.value = "";
        studentGrade.value = "";
    });

    sortSelect.addEventListener("change", () => {
        let sortBy = sortSelect.value;
        let sorted = [...students];

        if (sortBy === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));  //localeCompare عملت search عليها
        } else if (sortBy === "grade") {
            sorted.sort((a, b) => b.grade - a.grade);
        }

        tableOutput(sorted);
    });

    filterSelect.addEventListener("change", () => {
        let filterBy = filterSelect.value;
        let filtered = [];

        if (filterBy === "all") {
            filtered = students;
        } else if (filterBy === "failed") {
            filtered = students.filter(s => s.grade < 60);
        } else if (filterBy === "success") {
            filtered = students.filter(s => s.grade >= 60);
        }

        tableOutput(filtered);
    });

    tableOutput(students);
