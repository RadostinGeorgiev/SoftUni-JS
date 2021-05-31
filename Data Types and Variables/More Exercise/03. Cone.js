function cone(radiusOfBase, height) {

    let volume = Math.PI * Math.pow(radiusOfBase, 2) * height / 3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let coneSide = Math.sqrt(Math.pow(height, 2) + Math.pow(radiusOfBase, 2));
    let surfaceArea = Math.PI * radiusOfBase * (radiusOfBase + coneSide);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);