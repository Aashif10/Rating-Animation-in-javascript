// Select all i elements and store them in stars
let stars = document.querySelectorAll(".content i");
let heading = document.getElementById("heading");
// Loop through the stars NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the stars NodeList again
    stars.forEach((star, index2) => {
      if (index1 == 0) {
        heading.innerText = "Bad😞";
      } else if (index1 == 1) {
        heading.innerText = "Good😊";
      } else if (index1 == 2) {
        heading.innerText = "Average😐 ";
      } else if (index1 == 3) {
        heading.innerText = "Amazing🤩";
      } else if (index1 == 4) {
        heading.innerText = "Exellent🎉";
      }
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
