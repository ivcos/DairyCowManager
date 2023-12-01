function onDOMLoaded() {
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
