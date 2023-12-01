// Calculate tank Capacity
function calculate(tankNbr) {
  console.log(tankNbr);
  //Fetch the input tank dimension values
  let tankWidth = document.getElementById("width-tank-" + tankNbr).value;
  console.log(tankWidth);
  let tankHeight = document.getElementById("length-tank-" + tankNbr).value;
  console.log(tankHeight);
  let tankDepth = document.getElementById("depth-tank-" + tankNbr).value;
  console.log(tankDepth);
  document.getElementById("capacity-tank-" + tankNbr).value = isNaN(
    tankWidth * (tankHeight - 0.2) * tankDepth * 1000
  )
    ? ""
    : Math.floor(tankWidth * (tankHeight - 0.2) * tankDepth * 1000);
  // Add safety margin for animal Health which 20cm from top of tank
  document.getElementById("capacity-tank-" + tankNbr).style.fontWeight = "bold";
  document.getElementById("capacity-tank-" + tankNbr).style.fontSize = "1.0rem";
}

// when clear button is pressed, clear all vlaues for that tank
function clearTankData(tankNbr) {
  document.getElementById("width-tank-" + tankNbr).value = "";
  document.getElementById("length-tank-" + tankNbr).value = "";
  document.getElementById("depth-tank-" + tankNbr).value = "";
  document.getElementById("capacity-tank-" + tankNbr).value = "";
}

function calculateTotalSlurryCapacity() {
  let totalSlurryCapacity = 0;
  for (let i = 1; i < 5; i++) {
    calculate(i);
    let tank = document.getElementById("capacity-tank-" + i).value;
    totalSlurryCapacity += parseInt(tank);
    console.log("total slurry capacity: " + totalSlurryCapacity);
  }
  document.getElementById("total-slurry-capacity-litres").value =
    totalSlurryCapacity;
}

function calculateSlurryStorageRequired() {
  //get user entries for Dairy Cows and validate each entry
  //Number of days should not be greater than 365
  let nbrDairyCows = document.getElementById(
    "nbr-dairy-cows-slurry-calculation"
  ).value;
  console.log("Number of Dairy Cows: " + nbrDairyCows);
  let nbrDaysSlurryStorageRequired = document.getElementById(
    "nbr-days-dairy-cows-slurry-calculation-days-inside"
  ).value;
  console.log("Number of Days: " + nbrDaysSlurryStorageRequired);
  document.getElementById("slurry-storage-required-dairy-cows").value =
    nbrDairyCows * nbrDaysSlurryStorageRequired * 0.047 * 1000;
  console.log(
    "Slurry Storage For Dairy Cows: " +
      nbrDairyCows * nbrDaysSlurryStorageRequired * 0.048
  );
  //Get the User Entries for the 0-1 Years
  let nbr01Year = document.getElementById(
    "nbr-calves-slurry-calculation"
  ).value;
  console.log("Number of Calves: " + nbr01Year);
  let nbrDaysSlurryStorageRequiredCalves = document.getElementById(
    "nbr-days-dairy-calves-slurry-calculation-days-inside"
  ).value;
  console.log(
    "Nrb of Days Calves inside: " + nbrDaysSlurryStorageRequiredCalves
  );
  document.getElementById("slurry-storage-required-calves").value =
    nbr01Year * nbrDaysSlurryStorageRequiredCalves * 0.012 * 1000;

  // Get the User Entries for the 1-2 Year olds
  let nbr12Year = document.getElementById(
    "nbr-heifers-slurry-calculation"
  ).value;
  console.log(nbr12Year);
  let nbrDaysSlurryStorageRequired12Year = document.getElementById(
    "nbr-days-heifers-slurry-calculation-days-inside"
  ).value;
  document.getElementById("slurry-storage-required-heifers").value =
    nbr12Year * nbrDaysSlurryStorageRequired12Year * 0.037 * 1000;

  // Get user entries for the 2+ Years
  let nbr2PlusYear = document.getElementById(
    "nbr-2YearPlus-slurry-calculation"
  ).value;
  console.log("Number of 2 Yeat +:" + nbr2PlusYear);
  let nbrDatsSlurryStorageRequired2YearPlus = document.getElementById(
    "nbr-days-2YearPlus-slurry-calculation-days-inside"
  ).value;
  document.getElementById("slurry-storage-required-2YearPlus").value =
    nbr2PlusYear * nbrDatsSlurryStorageRequired2YearPlus * 0.041 * 1000;
}

function onDOMLoaded() {
  document
    .querySelector("#calculate-slurry-storage-required")
    .addEventListener("click", function () {
      calculateSlurryStorageRequired();
      console.log("Item 1");
    });

  //Handling for Burger Bar
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
  // document.querySelector("#Clear").addEventListener("click", function (event) {
  //   clearForm(event);
  //   console.log("Form Cleared");
  // }); // <-- added closing parenthesis here//
}

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
