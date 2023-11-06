// Get today's date
function formatDate() {
  console.log("Entering formatDate");
  let today = new Date(); //get the current date and time
  console.log("Today's date", today);
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  // let yyyy = today.getFullYear();
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  console.log("Today's date", today);
  return today;
}
// Function to get the current date and populate the date field in the form
function getTodayDate() {
  console.log("Entering getTodayDate");
  let dateFormInput = document.getElementById("form_date_of_birth");
  dateFormInput.value = formatDate();
  console.log("Date Form Input", dateFormInput);
}

// Function Display Form for Register Birth and also allow user to input data
function registerBirth(event) {
  console.log("Entering registerBirth");
  // console.log("Set the default date to today's date");
  // let today = getTodayDate();
  // Change display from none to block for the register birth form
  let formElement = document.getElementById("calving_form");
  let formElementStyle = window.getComputedStyle(formElement);
  let formElementStyleDisplay = formElementStyle.getPropertyValue("display");
  console.log("Display", formElementStyleDisplay);
  //Now change the display to block so Form is Displayed
  formElement.style.display = "block";
  console.log("Display after change", formElementStyleDisplay);
  let today = getTodayDate();
  console.log("Today's date", today);
}

// Add a function that checks that at least one of the radio fields is selected
function validateRadioButtons() {
  console.log("Entering validateRadioButtons");
  let radios = document.getElementsByName("Choose");
  console.log("Radios", radios);
  console.log(radios.length);
  if (radios.length > 0) {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function submitAnimalFormData(event) {
  //Data it not stored for the moment,
  // 1. Change button color to green and
  // 2.generate a message and also
  //3.clear the form as well after the message is displayed
  //4. Change color of button back to grey
  console.log("Entering the function submitAnimalFormData");
  // radioBoxChecked = validateRadioButtons();
  // console.log("Radio Box Checked", radioBoxChecked);
  //Validate the Form Data inputted
  //Display message to user that form has been submitted successfully
  let formCowTagNbr = document.getElementById("form_cow_tag_nbr");
  let formDateBirth = document.getElementById("form_date_of_birth");
  let formCalfTagNbr = document.getElementById("form_mothers_tag");
  console.log(formCalfTagNbr);
  let message = document.getElementById("message");
  if (
    formCowTagNbr.value.trim() === "" ||
    formDateBirth.value.trim() === "" ||
    formCalfTagNbr.value.trim() === ""
    // radioBoxChecked === false
  ) {
    message.textContent = "Please enter all the required fields";
    message.style.display = "block";
  } else {
    message.textContent = "Form Submitted Successfully";
    message.style.display = "block";
  }
  //Clear the form input data and remove the mesaage again
  // document.getElementById("calving_form").reset();
  // message.textContent = "";
}

function clearFormData(event) {
  console.log("Entering the clearFormData");
  //Clear the form input data and remove the mesaage again
  document.getElementById("calving_form").reset();
  message.style.display = "none";
  let today = getTodayDate();
  console.log("Today's date", today);
}

function closeForm(event) {
  console.log("Entering the closeForm");
  document.getElementById("calving_form").style.display = "none";
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
      console.log("Item 2a: Submiting Calf Data");
    });

  document
    .querySelector("#clear_reset_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 3: Clearing Form Data");
      clearFormData(event);
      console.log("Item 3: Clearing Form Data");
    });

  document
    .querySelector("#close_form")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 4: Closing Form");
      closeForm(event);
      console.log("Item 4: Closing Form");
    });
}

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
