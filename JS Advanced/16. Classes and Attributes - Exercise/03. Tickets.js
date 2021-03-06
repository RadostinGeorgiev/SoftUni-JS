function sortTickets(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    array.forEach(v => {
        const [destination, price, status] = v.split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    });

    const sorted = sortingCriteria == 'price'
        ? tickets.sort((a, b) => a.price - b.price)
        : tickets.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));

    return sorted;
}


console.log(sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));