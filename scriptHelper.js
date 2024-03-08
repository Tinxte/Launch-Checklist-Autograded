// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === "") {
       let output = "Empty"
    } else if (typeof(testInput === Number)) {
        let output = "Is a Number"
    } else if (isNaN(testInput) === true) {
        let output = "Not a Number"
    }
        return output
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const faultyItems = document.querySelector("#faultyItems");
    let newList = "";
    const launchStatus = document.querySelector("#launchStatus");
    let launchStatusID = "launchStatus";
    let status = "Awaiting Information Before Launch";
    let visibility = "hidden";


    //Pilot & Copilot status

    const pilotStatus = document.querySelector("#pilotStatus");
    const copilotStatus = document.querySelector("#copilotStatus");

    let pilotName = pilot;
    let copilotName = copilot;

    //Fuel level and status

    let fuelStatus = "Fuel level high enough for launch";

    if (fuelLevel < 10000) {
        visibility = "visible";
        fuelStatus = "Not enough fuel for launch";
        launchStatusID = "launchStatusNotReady";
        status = "Shuttle not ready for launch";
    }


    //TODO Cargo Mass

    //cargo mass code here

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
    faultyItems.innerHTML = list;

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;