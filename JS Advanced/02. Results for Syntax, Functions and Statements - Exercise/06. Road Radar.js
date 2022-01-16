function roadRadar(speed, area) {
    let speedLimit;
    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    let difference = speed - speedLimit;

    let status;
    switch (true) {
        case difference <= 20: status = 'speeding'; break;
        case difference <= 40: status = 'excessive speeding'; break;
        default: status = 'reckless driving'; break;
    }
 
    speed <= speedLimit
        ? console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);;
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');