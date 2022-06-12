function filterEmployees(...input) {
    const [criteria, value] = input.pop().split('-');
    const employees = JSON.parse(input);

    const filtered = criteria === 'all'
        ? employees
        : employees.filter(e => e[criteria] === value);

    filtered.forEach((e, i) =>
        console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`));
}

filterEmployees(`[
    {
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
    }, 
    {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }
]`,
    'gender-Female'
);

filterEmployees(`[
    {
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
    }, 
    {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
     }, 
     {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }, 
    {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
    }
]`,
    'last_name-Johnson'
);