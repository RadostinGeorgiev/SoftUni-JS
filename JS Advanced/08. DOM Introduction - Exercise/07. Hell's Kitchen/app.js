function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurantsInfo = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurants = [];

      for (const restaurantInfo of restaurantsInfo) {
         let [restaurantName, workersInfo] = restaurantInfo.split(' - ');
         let restaurant = {};

         if (!restaurants.some(r => r.name === restaurantName)) {
            restaurant['name'] = restaurantName;
            restaurant['workers'] = [];
            restaurant['average'] = function () {
               return this['workers'].reduce((a, b) => a + b.salary, 0) / this['workers'].length || 0;
            }

            restaurants.push(restaurant);
         } else {
            restaurant = restaurants.find(r => r.name === restaurantName);
         }

         let workers = workersInfo.split(', ');

         for (const workerInfo of workers) {
            let [workerName, salary] = workerInfo.split(' ');
            salary = Number(salary);

            const worker = {
               name: workerName,
               salary: salary,
               toString() { return `Name: ${this.name} With Salary: ${this.salary}` },
            };

            restaurant['workers'].push(worker);
         }
      }

      restaurants.sort((a, b) => b.average() - a.average());
      restaurants[0].workers.sort((a, b) => b.salary - a.salary);

      document.querySelector('#bestRestaurant p')
         .textContent = `Name: ${restaurants[0].name} Average Salary: ${restaurants[0].average().toFixed(2)} Best Salary: ${restaurants[0].workers[0].salary.toFixed(2)}`;

      document.querySelector('#workers p').textContent = restaurants[0].workers.map(el => el.toString()).join(' ');
   }
}