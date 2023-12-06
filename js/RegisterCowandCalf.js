// Validate User Input on Entering the data. Once data is entered correctly, label goes green
//
function validateAlphanumeric(input) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(input);
}
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

// Function to get the AI Date and populate in the AI date field in the AIForm
function getAIDate() {
  console.log("Getting AI Date + Calving Date");
  console.log("Entering getTodayDate");
  let dateFormOfAI = document.getElementById("form_date_of_AI");
  dateFormOfAI.value = formatDate();
  console.log("Date Form Input", dateFormOfAI.value);
  let dateFormOfCalving = new Date(dateFormOfAI.value);
  console.log("Date of Calving: " + dateFormOfCalving);
  dateFormOfCalving.setMonth(
    dateFormOfCalving.getMonth() + 9,
    dateFormOfCalving.getDate() + 7
  );
  console.log(dateFormOfCalving);
  document.getElementById("form_date_of_Calving").value =
    dateFormOfCalving.toLocaleDateString();
}

// Hides all six flex items when the user has selected one of the six options
function hideFlexItems() {
  let classRegister = document.getElementsByClassName("register");
  console.log(classRegister);
  for (let i = 0; i < classRegister.length; i++) {
    console.log(classRegister[i].style.display);
    classRegister[i].style.display = "none";
    console.log(classRegister[i].style.display);
    console.log("test103");
  }
}
// Diesplays all six flex items when the use has closed a Form
function displayFlexItems() {
  let classRegister = document.getElementsByClassName("register");
  console.log(classRegister);
  for (let i = 0; i < classRegister.length; i++) {
    console.log(classRegister[i].style.display);
    classRegister[i].style.display = "";
    console.log(classRegister[i].style.display);
    console.log("test104");
  }
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
  hideFlexItems();
  let dateFormInput = document.getElementById("form_date_of_birth");
  let today = getTodayDate();
  console.log("Today's date xx", today);
}

//Function to register animal bought into the farm
function registerAnimal(event) {
  console.log("Entering registerAnimal");
  let FormElementRegisterAnimal = document.getElementById("New Animal Form");
  let FormElementRegisterAnimalStyle = window.getComputedStyle(
    FormElementRegisterAnimal
  );
  let FormElementRegisterAnimalStyleDisplay =
    FormElementRegisterAnimalStyle.getPropertyValue("display");
  console.log("Display", FormElementRegisterAnimalStyleDisplay);
  //Now change the display to block so Form is Displayed
  FormElementRegisterAnimal.style.display = "block";
  hideFlexItems();
  console.log("Display after change", FormElementRegisterAnimalStyleDisplay);
  let today = getTodayDate();
  console.log("Today's date", today);
}

// Add AI Event to the AI Form
function registerAI() {
  console.log("Entering AIForm");
  let formElementRegisterAI = document.getElementById("AIForm");
  let formElementRegisterAIStyle = window.getComputedStyle(
    formElementRegisterAI
  );
  let formElementRegisterAIStyleDisplay =
    formElementRegisterAIStyle.getPropertyValue("display");
  console.log("Dispaly", formElementRegisterAIStyleDisplay);
  //Now change the display to block so Form is Displayed
  formElementRegisterAI.style.display = "block";
  aiDate = getAIDate();
  hideFlexItems();
}

// Function to Register Sale of Animal off Farm
function registerAnimalSale() {
  console.log("Entering RegisterSale");
  let formElementRegisterSale = document.getElementById("SaleForm");
  let formElementRegisterSaleStyle = window.getComputedStyle(
    formElementRegisterSale
  );
  let formElementRegisterSaleStyleDisplay =
    formElementRegisterSaleStyle.getPropertyValue("display");
  console.log("Display:  " + formElementRegisterSaleStyleDisplay);
  formElementRegisterSale.style.display = "block";
  hideFlexItems();
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
  //5. Prevent the form from default submission
  console.log("Entering the function submitAnimalFormData");
  // radioBoxChecked = validateRadioButtons();
  // console.log("Radio Box Checked", radioBoxChecked);
  //Validate the Form Data inputted
  //Display message to user that form has been submitted successfully
  let formCowTagNbr = document.getElementById("form_cow_tag_nbr");
  let formDateBirth = document.getElementById("form_date_of_birth");
  let formCalfTagNbr = document.getElementById("form_mothers_tag");
  let formMotherFreezeBand = document.getElementById("form_mother_freezeband");

  console.log(formCalfTagNbr);
  let message = document.getElementById("message");
  if (
    formCowTagNbr.value.trim() === "" ||
    formDateBirth.value.trim() === "" ||
    formCalfTagNbr.value.trim() === ""
    // radioBoxChecked === false
  ) {
    message.textContent = "PLEASE ENTER ALL THE REQUIRED FIELDS";
    message.style.display = "block";
  } else if (
    validateAlphanumeric(formCowTagNbr) ||
    validateAlphanumeric(formCalfTagNbr) ||
    validateAlphanumeric(formMotherFreezeBand)
  ) {
    console.log(!validateAlphanumeric(formCowTagNbr));
    message.textContent = "PLEASE ENTER NUMBERS AND LETTERS";
    console.log("PLEASE ENTER NUMBERS AND LETTERS");
    message.style.display = "block";
  } else {
    message.textContent = "DATA ENTERED SUCCESSFULLY";
    message.style.display = "block";
  }
  //Clear the form input data and remove the mesaage again
  // document.getElementById("calving_form").reset();
  // message.textContent = "";
}

function submitNewAnimalFormData(event) {
  console.log("Entering the function submitNewAnimalFormData");
  let formNewAnimalTagNbr = document.getElementById(
    "new_animal_form_cow_tag_nbr"
  );
  console.log(formNewAnimalTagNbr.value);
  let messageNewAnimal = document.getElementById("message-new-animal");
  if (formNewAnimalTagNbr.value.trim() === "") {
    messageNewAnimal.textContent = "PLEASE ENTER ALL THE REQUIRED FIELDS";
    messageNewAnimal.style.display = "block";
  } else if (validateAlphanumeric(formNewAnimalTagNbr)) {
    console.log(!validateAlphanumeric(formNewAnimalTagNbr));
    messageNewAnimal.textContent = "PLEASE ENTER NUMBERS AND LETTERS";
    console.log("PLEASE ENTER NUMBERS AND LETTERS");
    messageNewAnimal.style.display = "block";
  } else {
    messageNewAnimal.textContent = "DATA ENTERED SUCCESSFULLY";
    messageNewAnimal.style.display = "block";
  }
}

function submitNewAIFormData(event) {
  console.log("Entering the submit new AI Data");
  let formAITagNbr = document.getElementById("ai_form_cow_tag_nbr_AI");
  console.log(formAITagNbr.value);
  let messageNewAI = document.getElementById("message-new-ai");
  if (formAITagNbr.value.trim() === "") {
    messageNewAI.textContent = "PLEASE ENTER ALL THE REQUIRED FIELDS";
    messageNewAI.style.display = "block";
  } else if (validateAlphanumeric(formAITagNbr)) {
    console.log(!validateAlphanumeric(formAITagNbr));
    messageNewAI.textContent = "PLEASE ENTER NUMBERS AND LETTERS";
    console.log("PLEASE ENTER NUMBERS AND LETTERS");
    messageNewAI.style.display = "block";
  } else {
    messageNewAI.textContent = "DATA ENTERED SUCCESSFULLY";
    messageNewAI.style.display = "block";
  }
}
// Function to Submit Animal Sale Data
function submitAnimalSaleFormData(event) {
  console.log("Entering the submit Animal Sale Data");
  let formAnimalSaleTagNbr = document.getElementById(
    "animal_sale_form_cow_tag_nbr_sale"
  );
  console.log(formAnimalSaleTagNbr.value);
  let messageNewSale = document.getElementById("message-animal-sale");
  if (formAnimalSaleTagNbr.value.trim() === "") {
    messageNewSale.textContent = "PLEASE ENTER ALL THE REQUIRED FIELDS";
    messageNewSale.style.display = "block";
  } else if (validateAlphanumeric(formAnimalSaleTagNbr)) {
    console.log(!validateAlphanumeric(formAnimalSaleTagNbr));
    messageNewSale.textContent = "PLEASE ENTER NUMBERS AND LETTERS";
    console.log("PLEASE ENTER NUMBERS AND LETTERS");
    messageNewSale.style.display = "block";
  } else {
    messageNewSale.textContent = "DATA ENTERED SUCCESSFULLY";
    messageNewSale.style.display = "block";
  }
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
  displayFlexItems();
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
    .querySelector("#submit_new_animal_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 2: Submiting new animal Data");
      submitNewAnimalFormData(event);
      console.log("Item 2a: Submiting new animal Data");
    });

  //Function to submit AI Data
  document
    .querySelector("#submit_AI_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 7: Submiting AI Data");
      submitNewAIFormData(event);
      console.log("Item 7a: Submiting new AI Data");
    });

  // Fucntion to Submit Animal Sale Data
  document
    .querySelector("#submit_animal_sale_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 7: Submiting Animal Sale Data");
      submitAnimalSaleFormData(event);
      console.log("Item 7a: Submiting Animal Sale Data");
    });
  document
    .querySelector("#clear_reset_data")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 3: Clearing Form Data");
      //Clear the three RED Error messages by setting display:none
      document.getElementById("form_cow_tag_nbr_error").style.display = "none";
      document.getElementById("form_mothers_error_msg").style.display = "none";
      document.getElementById(
        "form_mothersfreezeband_error_msg"
      ).style.display = "none";
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

  // For animals bought in to the farm

  document
    .querySelector("#register_animal")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 5: Register Animal");
      registerAnimal(event);
      console.log("Item 4: Closing Form");
    });

  //Event Listener for registerAI Button
  document
    .querySelector("#register_AI")
    .addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Item 6: Register AI");
      registerAI(event);
      console.log("Item 5: Closing Form");
    });

  // Event Listener for register animal Sale
  document
    .querySelector("#Animal-Sale")
    .addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Item 7: Register animalSale");
      registerAnimalSale(event);
      console.log("Item 5: Closing Animal Sale Form");
    });

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
  //Check and validate the user input  for first input with id = form_cow_tag_nbr in Register Birth
  const textInputFormCowTagNbr = document.getElementById("form_cow_tag_nbr");
  console.log("Calf Tag Number" + textInputFormCowTagNbr);

  // Add an event listener for text input with id form_cow_tag_nbr
  textInputFormCowTagNbr.addEventListener("input", function () {
    const textInputFormCowTagNbrtrim = textInputFormCowTagNbr.value.trim();
    if (textInputFormCowTagNbrtrim == "") {
      console.log("Input cannot be left blank");
      document.getElementById("form_cow_tag_nbr_error").style.display =
        "inline-block";
    } else if (!validateAlphanumeric(textInputFormCowTagNbrtrim)) {
      console.log("Only numbers and letters are allowed");
      document.getElementById("form_cow_tag_nbr_error").style.display =
        "inline-block";
      document.getElementById("form_cow_tag_nbr_error").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      // const errorParagraphError = document.createElement("p");
      // errorParagraphError.innerText = "Error: Only numbers allowed";
      // textInputFormCowTagNbr.after(errorParagraphError);
    } else {
      console.log("Input is valid");
      document.getElementById("form_cow_tag_nbr_error").innerHTML = "";
    }
  });
  //Check and validate the user input  for first input with id = form_cow_tag_nbr in Register Birth
  const textInputFormMothersTagNbr =
    document.getElementById("form_mothers_tag");
  console.log("Mothers Tag Number" + textInputFormMothersTagNbr);
  // Add an event listener for text input with id form_cow_mothers_tag
  textInputFormMothersTagNbr.addEventListener("input", function () {
    const textInputFormMothersTagNbrTrim =
      textInputFormMothersTagNbr.value.trim();
    if (textInputFormMothersTagNbrTrim == "") {
      console.log("Mother's tag cannot be let blank");
      document.getElementById("form_mothers_tag").style.display =
        "inline-block";
    } else if (!validateAlphanumeric(textInputFormMothersTagNbrTrim)) {
      document.getElementById("form_mothers_error_msg").style.display =
        "inline-block";
      document.getElementById("form_mothers_error_msg").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      console.log("Only numbers and letters are allowed");
    } else {
      console.log("input is valid");
      document.getElementById("form_mothers_error_msg").innerHTML = "";
    }
  });

  //check and validate the user inputfor the 3rd input in the Register Calf Form. Feeezeband
  const textInputFormMothersFreezeband = document.getElementById(
    "form_mother_freezeband"
  );
  console.log("Mothers FreezeBand" + textInputFormMothersFreezeband);
  // Add an event lsitener for for text input with id form_mothersfreezeband
  textInputFormMothersFreezeband.addEventListener("input", function () {
    const textInputFormMothersFreezebandTrim =
      textInputFormMothersFreezeband.value.trim();
    if (textInputFormMothersFreezebandTrim == "") {
      console.log("This is ok as this field is optional");
      console.log(textInputFormMothersFreezebandTrim);
    } else if (!validateAlphanumeric(textInputFormMothersFreezebandTrim)) {
      document.getElementById(
        "form_mothersfreezeband_error_msg"
      ).style.display = "inline-block";
      document.getElementById("form_mothersfreezeband_error_msg").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      console.log("Only letters and numbers allowed");
    } else {
      console.log("input is valid");
      document.getElementById("form_mothersfreezeband_error_msg").innerHTML =
        "";
    }
  });
  //Check and validate the user input  for first input with id = form_new_animal_tag_nbr in Register New animal

  const textInputNewAnimalFormCowTagNbr = document.getElementById(
    "new_animal_form_cow_tag_nbr"
  );
  console.log("Cow Tag Number" + textInputNewAnimalFormCowTagNbr);
  //   Add an event listener for text input with id form_cow_tag_nbr
  textInputNewAnimalFormCowTagNbr.addEventListener("input", function () {
    const textInputNewAnimalFormCowTagNbrTrim =
      textInputNewAnimalFormCowTagNbr.value.trim();
    if (textInputNewAnimalFormCowTagNbrTrim == "") {
      console.log("1Mother's tag cannot be let blank");
      document.getElementById(
        "new_animal_form_cow_tag_nbr_error"
      ).style.display = "inline-block";
    } else if (!validateAlphanumeric(textInputNewAnimalFormCowTagNbrTrim)) {
      document.getElementById(
        "new_animal_form_cow_tag_nbr_error"
      ).style.display = "inline-block";
      document.getElementById("new_animal_form_cow_tag_nbr_error").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      console.log("Only numbers and letters are allowed");
    } else {
      console.log("input is valid");
      document.getElementById("new_animal_form_cow_tag_nbr_error").innerHTML =
        "";
    }
  });

  // AI FORM
  //Check and validate the user input for the first input with id= ai_form_cow_tag_nbr_AI
  const textInputNewAIFormCowTagNbr = document.getElementById(
    "ai_form_cow_tag_nbr_AI"
  );
  console.log("Cow Tag Number" + textInputNewAIFormCowTagNbr);
  //   Add an event listener for text input with id form_cow_tag_nbr
  textInputNewAIFormCowTagNbr.addEventListener("input", function () {
    const textInputNewAIFormCowTagNbrTrim =
      textInputNewAIFormCowTagNbr.value.trim();
    if (textInputNewAIFormCowTagNbrTrim == "") {
      console.log("2Mother's tag cannot be let blank");
      document.getElementById("new_ai_form_cow_tag_nbr_error").style.display =
        "inline-block";
    } else if (!validateAlphanumeric(textInputNewAIFormCowTagNbrTrim)) {
      document.getElementById("ai_form_cow_tag_nbr_error").style.display =
        "inline-block";
      document.getElementById("ai_form_cow_tag_nbr_error").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      console.log("Only numbers and letters are allowed");
    } else {
      console.log("input is valid");
      document.getElementById("ai_form_cow_tag_nbr_error").innerHTML = "";
    }
  });

  //ANIMAL SALE
  //Check and validate the user input for the first input with id= ai_form_cow_tag_nbr_AI
  const textInputAnimalSaleTagNbr = document.getElementById(
    "animal_sale_form_cow_tag_nbr_sale"
  );
  console.log("Cow Tag Number" + textInputAnimalSaleTagNbr);
  textInputAnimalSaleTagNbr.addEventListener("input", function () {
    const textInputAnimalSaleTagNbrTrim =
      textInputAnimalSaleTagNbr.value.trim();
    if (textInputAnimalSaleTagNbrTrim == "") {
      console.log("2Mother's tag cannot be let blank");
      document.getElementById(
        "animal_sale_form_cow_tag_nbr_error"
      ).style.display = "inline-block";
    } else if (!validateAlphanumeric(textInputAnimalSaleTagNbrTrim)) {
      document.getElementById(
        "animal_sale_form_cow_tag_nbr_error"
      ).style.display = "inline-block";
      document.getElementById("animal_sale_form_cow_tag_nbr_error").innerHTML =
        "ERROR:ONLY NUMBERS AND LETTERS ALLOWED";
      console.log("Only numbers and letters are allowed");
    } else {
      console.log("input is valid");
      document.getElementById("animal_form_cow_tag_nbr_error").innerHTML = "";
    }
  });
}
//   .querySelector("#update_animal_details")
//   .addEventListener("click", function (event) {
//     updateAnimalDetails(event);
//     console.log("Item 3: Update Animal Details");
//   });

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
