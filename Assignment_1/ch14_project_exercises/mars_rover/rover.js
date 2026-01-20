"use strict";
const getElement = selector => document.querySelector(selector);

const domain = "https://rovers.nebulum.one/api/v1/rovers";



document.addEventListener("DOMContentLoaded", async () => {
    // get rover data
    const response = await fetch(domain);
    const roverData = await response.json();
    
    const roverSelect = getElement("#rover");

    const roverList = roverData.rovers;

    roverList.forEach( rover => {
        console.log(rover);
        let roverOption = document.createElement("option");
        roverOption.value = rover.name;
        roverOption.textContent = rover.name;
        roverSelect.appendChild(roverOption);
    })
        
    getElement("#options").classList.remove("hide");

    







    

    // change event handler for Rover drop-down
    getElement("#rover").addEventListener("change", async (evt) => {
        
    });

    // click event handler for View button
    getElement("#view").addEventListener("click", async () => {
        
    });
});