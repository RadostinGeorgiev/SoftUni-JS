function scholarship(input) {
    let income = Number(input[0]);
    let grade = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScholarship = 0;
    let gradeScholarship = 0;

    if (income < minSalary && grade > 4.5) {
        socialScholarship = minSalary * 0.35;
    }

    if (grade >= 5.5) {
        gradeScholarship = grade * 25;
    }

    if (socialScholarship == 0 && gradeScholarship == 0) {
        console.log('You cannot get a scholarship!');
    } else if (socialScholarship > gradeScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
    }
}

scholarship(['480.00', '4.60', '450.00']);
scholarship(['300.00', '5.65', '420.00']);