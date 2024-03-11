// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

        console.log("window loaded");

    // let submission = document.getElementById("formSubmit");
    // submission.addEventListener("click", function(event) {
    //     window.alert("clicked!");
    //     console.log("button pushed!");
    //     // ;
        
    // });

    let submission = document.getElementById("formSubmit");
    submission.addEventListener("submit", formSubmission);
    console.log("button being pushed");
       
    window.alert("clicked!");
                    console.log("button pushed!");



    console.log("this prints after the submission event listener");

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
 });