function distance([speed1, speed2, timeInSec]) {
    let dist1 = (speed1 / 3.6) * timeInSec;
    let dist2 = (speed2 / 3.6) * timeInSec;
    let delta = Math.abs(dist1 - dist2);

    return delta;
}
