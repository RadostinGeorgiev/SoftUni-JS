class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([...arguments].some(p => !p || salary < 0)) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        const employee = { name, salary, position, };
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAverageSalary = 0;

        for (const [department, employees] of Object.entries(this.departments)) {
            let departmentAverageSalary = employees.reduce((a, b) => a + b.salary, 0) / employees.length;

            if (departmentAverageSalary > bestAverageSalary) {
                bestAverageSalary = departmentAverageSalary;
                bestDepartment = department;
            }
        }

        let sortedEmployees = this.departments[bestDepartment]
            .sort((a, b) => b.salary - a.salary ||
                a.name.localeCompare(b.name))
            .map(e => `${e.name} ${e.salary} ${e.position}`)
            .join('\n');

        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n${sortedEmployees}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());