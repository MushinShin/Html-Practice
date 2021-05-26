// Speed Limit >= 70 => ok
// 5 -> 1 point
// 72 -> ok every 5 points
// Math.floor()
// 12 points -> suspended

const speedLimit = 74.9;
const maxPoints = 12;
const kmPerPoint = 5;

function checkSpeed(speed) {
    if (speed <= speedLimit) {
        return console.log("ok");
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= maxPoints) return console.log("Licence Suspended");
    else
        console.log("Points: " + points);

    // while (Math.floor(speed) > speedLimit) {
    //     speed -= 5;
    //     points++;
    // } This is mine (Facu)

}
const speed = checkSpeed(74.9);