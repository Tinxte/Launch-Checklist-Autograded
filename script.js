// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

        console.log("window loaded");

    let list = this.document.getElementById("faultyItems");
    // let pilotName = document.getElementById("input[name=pilotName]");
    let copilotName = document.querySelector("copilotName");
    let fuelLevel = this.document.getElementById("fuelLevel");
    let cargoMass = this.document.getElementById("cargoMass");


    // formsubmit button ID works but testForm form ID doesn't? added ID in HTMl and it works now
    // also function only runs if I make formSubmission the submit function()


    let form = document.getElementById("testForm");
    form.addEventListener("submit", function (event) {
            let pilotName = document.querySelector("input[name=pilotName]");
console.log(`pilotName in script.js = ${pilotName}`);
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) 
        console.log("button being pushed");
    
    });
       
    // window.alert("clicked!");
    // console.log("button pushed!");



    console.log("this prints after the submission event listener");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    console.log(listedPlanetsResponse); //debugging

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    //NOTES TO EXPLORE
    //might have to write these functions, copy paste from textbook, check form validation
    // "I ended up skipping task 2 to complete task
    //  3 which was way easier. Just follow the fetch chapter’s stuff"

    // "i did the getElementById for the pilot textbox but query selector for everything else"
    
    // "I got the inputs as an array with the class selector and just 
    // separated them out into individual variables by index"

    // // let list = this.document.getElementById("faultyItems")
    //eventListener
    // event.preventDefault();
 });