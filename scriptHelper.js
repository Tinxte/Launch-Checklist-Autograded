// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.querySelector("missionTarget");
  let destinationInfo = "";

  destinationInfo = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
    
console.log(destinationInfo);

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
  console.log("debugging: function formSubmission running now...");

  const launchStatus = document.getElementById("launchStatus");
  let launchStatusID = "launchStatus";
  let status = "Awaiting Information Before Launch";
  let visibility = "visible";
  //looks good ^ v
  let fuel = document.getElementById("fuelStatus");
  let cargo = document.getElementById("cargoStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");

  //note: phillip said list parameter refers to faultyItems

  // Input Validation

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    return alert("All fields required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    return alert("Please enter valid information for each field!");
  } else {

    list.style.visibility = "visible";

    //Pilot & Copilot status

    let pilotName = pilot;
    let copilotName = copilot;

    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

    // Update list visibility after input validated


    //Fuel level, Cargo Mass and shuttle status

    if (fuelLevel < 10000 && cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      console.log("debugging: option 1");
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      console.log("debugging: option 2");
    } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      console.log("debugging: option 3");
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      console.log("debugging: option 4");
    }
  }
}

async function myFetch() {
  let planetsReturned;

//   planetsReturned = await fetch(
//     "https://handlers.education.launchcode.org/static/planets.json"
//   ).then(function (response) {});
//   if (response.status >= 400) {
//     throw new Error("Bad Response");
//   } else return response.json();
// }

planetsReturned = await fetch(
  "https://handlers.education.launchcode.org/static/planets.json"
).then(function (response) {});
return planetsReturned;
}

function pickPlanet(planets) {
  //random number
  let num = Math.floor(Math.random() * planets.length);
  //return planets[randomNumber];
  return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
