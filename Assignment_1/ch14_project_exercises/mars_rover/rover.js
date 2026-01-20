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

    getElement("#status").textContent = roverList[0].status;
    getElement("#photos").textContent = roverList[0].total_photos;
    getElement("#landing").textContent = roverList[0].landing_date
    getElement("#max").textContent = roverList[0].max_date;

    const yearSelect = getElement("#year");
    for(let i=2026; i>1999; i--) {
        let option = document.createElement("option")
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    const monthSelect = getElement("#month");
    for(let i=1; i<=12; i++) {
        let option = document.createElement("option")
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    const daySelect = getElement("#date");
    for(let i=1; i<=31; i++) {
        let option = document.createElement("option")
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    const cameraSelect = getElement("#camera");

    const cameraData = roverList[0].cameras;

    cameraData.forEach( camera => {
        let option = document.createElement("option")
        option.value = camera.name;
        option.textContent = camera.name;
        cameraSelect.appendChild(option)
    })






    

    // change event handler for Rover drop-down
    getElement("#rover").addEventListener("change", async (evt) => {
        
    });

    // click event handler for View button
    getElement("#view").addEventListener("click", async () => {
        
    });
});