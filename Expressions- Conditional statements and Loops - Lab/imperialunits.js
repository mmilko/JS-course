function imperialUnits(inches) {
    let foot = Number.parseInt(inches/12);
    inches = inches % 12;

    console.log(`${foot}'-${inches}"`);
}
