// function toggleForm(formId) {
//   let allForms = document.getElementsByClassName("form");
//   // console.log("all forms[0]" + allForms[0].attributes.style.display);
//   // console.log("all forms[1]" + allForms[1].attributes.style.display);
//   console.log(allForms[0]);
//   console.log(allForms[1]);
//   let test = document.getElementById(formId);
//   console.log(test);
//   console.log("Entering toggle Form");
//   console.log(test.style.display);
//   if (test.style.display === "none") {
//     test.style.display = "block";
//   } else {
//     test.style.display = "none";
//   }
// }

// Function Display Form for Register Birth and also allow user to input data
function registerBirth(event) {
  console.log("Entering registerBirth");
  // Change display from none to block for the register birth form
  let formElement = document.getElementById("calving_form");
  let formElementStyle = window.getComputedStyle(formElement);
  let formElementStyleDisplay = formElementStyle.getPropertyValue("display");
  console.log("Display", formElementStyleDisplay);
  //Now change the display to block so Form is Displayed
  formElement.style.display = "block";
  console.log("Display after change", formElementStyleDisplay);
}

function submitAnimalFormData(event) {
  //Data it not stored for the moment,
  // 1. Change button color to green and
  // 2.generate a message and also
  //3.clear the form as well after the message is displayed
  //4. Change color of button back to grey
  console.log("Entering the function submitAnimalFormData");
  //Display message to user that form has been submitted successfully
  let message = document.getElementById("message");
  message.style.display = "block";
  //Clear the form input data and remove the mesaage again
  document.getElementById("calving_form").reset();
}

function clearFormData(event) {
  console.log("Entering the clearFormData");
  //Clear the form input data and remove the mesaage again
  document.getElementById("calving_form").reset();
}

function onDOMLoaded() {
  document
    .querySelector("#register_birth")
    .addEventListener("click", function (event) {
      event.preventDefault(); //
      registerBirth(event);
      console.log("Item 1: Register Birth");
    });

  document
    .querySelector("#submit_calf_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 2: Submiting Calf Data");
      submitAnimalFormData(event);
      console.log("Item 2: Submiting Calf Data");
    });

  document
    .querySelector("#clear_reset_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 3: Clearing Form Data");
      clearFormData(event);
      console.log("Item 3: Clearing Form Data");
    });
}

// Create generic functions for the 3 button options in the forms, submit, Clear/Reset
//  and cancel/close

// function onDOMLoaded() {
//   document
//     .querySelector("#register_birth")
//     .addEventListener("click", function (event) {
//       registerBirth(event);
//       console.log("Item 1: Register Birth");
//     });

// Register Amnimal
// document
//   .querySelector("#register_animal")
//   .addEventListener("click", function (event) {
//     toggleForm(event);
//     console.log("Item 2: Register Animal");
//   });

// document
//   .querySelector("#update_animal_details")
//   .addEventListener("click", function (event) {
//     updateAnimalDetails(event);
//     console.log("Item 3: Update Animal Details");
//   });

// document
//   .querySelector("#search_animal_details")
//   .addEventListener("click", function (event) {
//     searchAnimalDetails(event);
//     console.log("Item 4: Search Animal Details");
//   });

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
