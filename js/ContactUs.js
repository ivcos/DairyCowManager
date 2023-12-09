//Function to submit Form Data
function submitContactFormData(event) {
  console.log("Submit Contact Form Data");
  let messageContactForm = document.getElementById(
    "message-contact-form-submitted"
  );
  let formContactFirstName = document.getElementById("form-first-name");
  let formContactLastName = document.getElementById("form-last-name");
  let formEmail = document.getElementById("form-email");
  if (
    formContactFirstName.value.trim() === "" ||
    formContactLastName.value.trim() === "" ||
    formEmail.value.trim() === ""
  ) {
    messageContactForm.textContent = "PLEASE ENTER ALL THE REQUIRED FIELDS";
    messageContactForm.style.display = "block";
  } else {
    messageContactForm.textContent = "DATA ENTERED SUCCESSFULLY";
    messageContactForm.style.display = "block";
  }
}

function onDOMLoaded() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  document
    .querySelector("#submit_contact_form")
    .addEventListener("click", function (event) {
      event.preventDefault(); // When this is added the default form is not submitted
      console.log("Item 10: Submiting Contact Form Data");
      submitContactFormData(event);
      console.log("Item 10a: Submiting Contact Form Data");
    });
}

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
