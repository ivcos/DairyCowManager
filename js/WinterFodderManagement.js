function calculateFodderRequired(event) {
  // get User entries for Dairy Cows
  let nbrDairyCows = document.getElementById("nbr_dairy_cows").value;
  console.log("Number of Dairy Cows: " + nbrDairyCows);
  let nbrOfDaysSilageRequired = document.getElementById(
    "nbr_days_dairy_cows"
  ).value;
  console.log("Number of Days Silage is Required: " + nbrOfDaysSilageRequired);
  let silageRequiredDairyCows = document.getElementById(
    "silage_required_dairy_cows"
  ).value;
  console.log("Silage Required for Dairy Cows: " + silageRequiredDairyCows);
  silageRequiredDairyCows = nbrDairyCows * nbrOfDaysSilageRequired * 0.054;
  console.log("Silage Required for Dairy Cows: " + silageRequiredDairyCows);
  document.getElementById("silage_required_dairy_cows").value =
    silageRequiredDairyCows;

  // get User entries for 0-1 Years
  let nbr01Year = document.getElementById("nbr_calves").value;
  console.log("Number of Calves: " + nbr01Year);
  let nbrOfDaysSilageRequiredCalves = document.getElementById(
    "nbr_days_dairy_calves"
  ).value;
  console.log(
    "Number of Days Silage is Required for 0-1Year: " +
      nbrOfDaysSilageRequiredCalves
  );
  let silageRequiredCalves = document.getElementById(
    "silage_required_calves"
  ).value;
  console.log("Silage Required for Calves" + silageRequiredCalves);
  silageRequiredCalves = nbr01Year * nbrOfDaysSilageRequiredCalves * 0.024;
  console.log("Silage Required for Calves: " + silageRequiredCalves);
  document.getElementById("silage_required_calves").value =
    silageRequiredCalves;

  // get User entries for 1-2 Years
  let nbr12Year = document.getElementById("nbr_heifers").value;
  console.log("Number of Calves: " + nbr01Year);
  let nbrDaysSilageRequiredHeifers =
    document.getElementById("nbr_days_heifers").value;
  console.log(
    "Number of Days Silage is Required Heifers: " + nbrDaysSilageRequiredHeifers
  );
  let silageRequiredHeifers = document.getElementById(
    "silage_required_heifers"
  ).value;
  console.log("Silage Required for Heifers" + silageRequiredHeifers);
  silageRequiredHeifers = nbr12Year * nbrDaysSilageRequiredHeifers * 0.043;
  console.log("Silage Required for Heifers: " + silageRequiredHeifers);
  document.getElementById("silage_required_heifers").value =
    silageRequiredHeifers;
  // get the User entries for 2+ Years
  let nbr2PlusYear = document.getElementById("nbr_2YearPlus").value;
  console.log("Number of Calves: " + nbr2PlusYear);
  let nbrDaysSilageRequired2Plus =
    document.getElementById("nbr_days_2YearPlus").value;
  console.log(
    "Number of Days Silage is Required 2+Year: " + nbrDaysSilageRequired2Plus
  );
  let silageRequired2Plus = document.getElementById(
    "silage_required_2YearPlus"
  ).value;
  console.log("Silage Required for 2+Year" + silageRequired2Plus);
  silageRequired2Plus = nbr2PlusYear * nbrDaysSilageRequired2Plus * 0.044;
  console.log("Silage Required for 2+Year: " + silageRequired2Plus);
  document.getElementById("silage_required_2YearPlus").value =
    silageRequired2Plus;
}

function onDOMLoaded() {
  document
    .querySelector("#calculate_silage")
    .addEventListener("click", function (event) {
      calculateFodderRequired(event);
      console.log("Item 1");
    });
}

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);

// //Standard for all pages

// // function calculateFodderRequired(event) {
// //   // get User entries for all fields
// //   let numberDairyCows = document.getElementById("nbr_dairy_cows").value;
// //   console.log("Number of Dairy Cows: " + numberDairyCows);
// // }

// window.onload = function () {
//   // The load event gets fired when the page loads. DomContentLoded event
//   //is ReadableByteStreamController. See MDND
//   //https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

//   function init() {
//     console.info("DOM Loaded");

//     // document
//     //   .getElementsByClassName("button-silage-calculation")
//     //   .addEventListener("click", function (event) {
//     //     calculateFodderRequired(event);
//     //   });
//     // document.querySelector("#clear").addEventListener("click", function(event){
//     //   clearForm(event);
//     // });
//     // document.querySelector("#subtotal").addEventListener("input", function(event){
//     //   validateSubtotal(event);
//     //   console.log(event.target.value);
//     // });

//     if (document.readyState === "loading") {
//       // Loading hasn't finished yet
//       document.addEventListener("DOMContentLoaded", init);
//     } else {
//       // `DOMContentLoaded` has already fired
//       init();
//     }
//   }
// };
