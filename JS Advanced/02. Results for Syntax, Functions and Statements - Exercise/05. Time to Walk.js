function timeToWalk(steps, footprint, speed) {
    speed = speed * 1000 / 3600;
    
    let distance = steps * footprint;
    let time = distance / speed;

    let breaks = Math.floor(distance / 500) * 60;
    time += breaks;

    let hours = (Math.floor(time / 3600)).toString().padStart(2, 0);
    let minutes = (Math.floor(time % 3600 / 60)).toString().padStart(2, 0);
    let seconds = (Math.round(time % 3600 % 60)).toString().padStart(2, 0);

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);