function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      displayOutput(getTheBest(createRestaurantsList()));
   }

   function createRestaurantsList() {
      const restaurants = {};

      JSON.parse(document.querySelector('textarea').value)
         .forEach(x => {
            [name, data] = x.split(' - ');

            if (!restaurants.hasOwnProperty(name)) {
               restaurants[name] = {
                  workers: [],
                  averageSalary: function () {
                     return this.workers.reduce((a, b) => a + b.salary, 0) / this.workers.length || 0;
                  },
               }
            };

            data.split(', ')
               .forEach(w => {
                  [worker, salary] = w.split(' ');
                  salary = Number(salary);

                  restaurants[name].workers.push({
                     worker,
                     salary,
                     toString() { return `Name: ${this.worker} With Salary: ${this.salary}` },
                  });
               });
         });

      return restaurants;
   }

   function getTheBest(data) {
      return Object.entries(data).sort((a, b) => b[1].averageSalary() - a[1].averageSalary())[0];
   };

   function displayOutput(data) {
      const sorted = data[1].workers.sort((a, b) => b.salary - a.salary);

      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${data[0]} Average Salary: ${data[1].averageSalary().toFixed(2)} Best Salary: ${sorted[0].salary.toFixed(2)} `;

      document.querySelector('#workers p').textContent = data[1].workers
         .map(x => x.toString())
         .join(' ');
   }
}