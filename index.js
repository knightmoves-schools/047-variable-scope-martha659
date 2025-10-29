var distanceInMiles = 100;

let estimatedArrivalTime = function () {
    let milesPerHour = 50;
    return distanceInMiles / milesPerHour;
}

document.getElementById("result").innerHTML = estimatedArrivalTime;






