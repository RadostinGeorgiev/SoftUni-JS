class Point{
    constructor(x, y){
        this.x = x,
        this.y = y
    }

    static distance(pointOne, pointTwo){
        let distanceX = pointOne.x - pointTwo.x;
        let distanceY = pointOne.y - pointTwo.y;
        
        return Math.hypot(distanceX, distanceY);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));