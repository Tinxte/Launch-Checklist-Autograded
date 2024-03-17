// Write your JavaScript code here!


window.addEventListener("load", function () {
  console.log("window loaded");

  let form = document.getElementById("testForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); //this keeps this from looking for somewhere to send it and refreshing itself.

    let list = document.getElementById("faultyItems"); //hidden list

    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName"); 
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    let copilot = copilotInput.value;
    let pilot = pilotInput.value;
    let fuelLevel = Number(fuelInput.value);
    let cargoLevel = Number(cargoMass.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    console.log("button being pushed");
  });

  console.log("debugging: this prints after the submission event listener");


  let listedPlanets;
  let listedPlanetsResponse = myFetch();


  listedPlanetsResponse.then(function (response) {
    listedPlanets = response;
    console.log(listedPlanets);
    console.log(typeof listedPlanets);
    let selectedplanet = pickPlanet(listedPlanets);
    console.log(selectedplanet);
    addDestinationInfo(
      document,
      selectedplanet.name,
      selectedplanet.diameter,
      selectedplanet.star,
      selectedplanet.distance,
      selectedplanet.moons,
      selectedplanet.image
    );
  });

});
