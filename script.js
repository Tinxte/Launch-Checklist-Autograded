// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

        console.log("window loaded");

// let form = document.querySelector("form"); //one way; purpose is getting form
//OR 
    let form = document.getElementById("testForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault() //this keeps this from looking for somewhere to send it and refreshing itself.

        let list = document.getElementById("faultyItems") //hidden list
        
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName"); //queryselector
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
    
        let copilot = copilotInput.value;
        let pilot = pilotInput.value;
        let fuelLevel = Number(fuelInput.value);
        let cargoLevel = Number(cargoMass.value);
        
    
        //those dont have ids ^ complete declarations

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 
        
        console.log("button being pushed");
    
    });

    console.log("debugging: this prints after the submission event listener");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch();

    // console.log(listedPlanetsResponse); //debugging

    listedPlanetsResponse = myFetch().then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedplanet = pickPlanet(listedPlanets);
        // addDestinationInfo(document, selectedplanet.name...)
        addDestinationInfo(document, selectedplanet.name, selectedplanet.diameter, selectedplanet.star, selectedplanet.distance, selectedplanet.moons, selectedplanet.imageUrl)
    })
    
    //NOTES TO EXPLORE
    //might have to write these functions, copy paste from textbook, check form validation
    // "I ended up skipping task 2 to complete task
    //  3 which was way easier. Just follow the fetch chapter’s stuff"
    
    // "I got the inputs as an array with the class selector and just 
    // separated them out into individual variables by index"


 });