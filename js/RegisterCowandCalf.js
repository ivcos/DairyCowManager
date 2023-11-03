function toggleForm(formId) {
  let allForms = document.querySelectorAll("form");
  console.log("all forms[0]" + allForms[0].attributes.style.display);
  console.log("all forms[1]" + allForms[1].attributes.style.display);
  console.log(allForms.length);
  let test = document.getElementById(formId);
  console.log(test);
  console.log("Entering toggle Form");
  console.log(test.style.display);
  if (test.style.display === "none") {
    test.style.display = "block";
  } else {
    test.style.display = "none";
  }
}

// function calculateFodderRequired(event) {
//   console.log("Register Cow and Calf page laoded");
// }

function onDOMLoaded() {
  document
    .querySelector("#register_birth")
    .addEventListener("click", function (event) {
      toggleForm(event);
      console.log("Item 1: Register Birth");
    });
  document
    .querySelector("#register_animal")
    .addEventListener("click", function (event) {
      toggleForm(event);
      console.log("Item 2: Register Animal");
    });

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
}

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
