let slideIndex = 0;
showSlides();

function showSlides(index) {
  const slides = document.getElementsByClassName("carousel-item");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
  slideIndex++;
  setTimeout(showSlides, 5000); // Change image every 5 seconds (3000ms
}

function onDOMLoaded() {
  document.getElementById("prevBtn").addEventListener("click", () => {
    slideIndex -= 1;
    showSlides(slideIndex);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    slideIndex += 1;
    showSlides(slideIndex);
  });

  // document.querySelector("#Clear").addEventListener("click", function (event) {
  //   clearForm(event);
  //   console.log("Form Cleared");
  // }); // <-- added closing parenthesis here//
}

// Attach the onDOMLoaded function to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDOMLoaded);
