var distanceInMiles = 100;

let estimatedArrivalTime = function () {
    let milesPerHour = 50;
    return distanceInMiles / milesPerHour;
}

document.getElementById("result").innerHTML = estimatedArrivalTime;

should create a global variable named distanceInMiles and set it to 100
- should create a function called estimatedArrivalTime that has no parameters
- should return the distanceInMiles divided by the milesPerHour from the estimatedArrivalTime function
- should assign the innerHTML of the HTML element with the id result to return value from estimatedArrivalTime



