// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(doc, name, diameter, star, distance, moons, imageUrl) {

    const missionTarget = document.getElementById("missionTarget");
    let destinationInfo = "";


    destinationInfo = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
    
    missionTarget.innerHTML = destinationInfo;
    
 }
 

 function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false) {
        return "Is a Number";
    }
 } 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

console.log("function formSubmission running now...");

    const faultyItems = this.document.getElementById("faultyItems");
    let newList = "";
    const launchStatus = this.document.getElementById("launchStatus");
    let launchStatusID = "launchStatus";
    let status = "Awaiting Information Before Launch";
    let visibility = "hidden";

    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus")

    //note: phillip said list parameter refers to faultyItems

    //Pilot & Copilot status

    let pilotName = pilot;
    let copilotName = copilot;

    // debugging
    console.log(" pilot name, copilot name, typeOf pilot name: ");
    console.log(pilot);
    console.log(copilot);
    console.log(typeof(pilotName));



if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       alert("All fields required!");
} else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
       alert("Please enter valid information for each field!");
}

    //Fuel level and status

    let fuelStatus = "Fuel level high enough for launch";

    if (fuelLevel < 10000) {
        console.log("Debugging: fuel under 10000");
        visibility = "visible";
        fuelStatus = "Not enough fuel for launch";
        launchStatusID = "launchStatusNotReady";
        status = "Shuttle not ready for launch";
    }


    //Cargo Mass

    let cargoStatus = "Cargo mass low enough for launch";

    if (cargoLevel > 10000) {
        visibility = "visible";
        cargoStatus = "Cargo mass too high for take off"
        launchStatusID = "launchStatusNotReady";
        status = "Shuttle not ready for launch";
    }

    //Shuttle ready for launch if above checks passed

    if (launchStatusID === "launchStatus") {
        launchStatusID = "launchStatusReady";
        status = "Shuttle is ready for launch.";
    }


    // New HTML content with updated variables

    newStatus = `<h2 id="${launchStatusID}" data-testid="launchStatus">${status}</h2>`

    newList = `<div id="faultyItems" style="visibility: ${visibility}">
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilotName} Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilotName} Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelStatus}</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    </ol>
</div>`

    //Update HTML with new content

    launchStatus.innerHTML = newStatus;
    faultyItems.innerHTML = newList;

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    });
    
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //random number 
        let num = Math.floor(Math.random() * planets.length)
    //return planets[randomNumber];
    return planets[num];
 }


 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;